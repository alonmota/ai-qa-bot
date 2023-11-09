import {Args, Command} from '@oclif/core'
import { ChatOpenAI } from 'langchain/chat_models/openai'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { ChatPromptTemplate, HumanMessagePromptTemplate, SystemMessagePromptTemplate } from 'langchain/prompts';
import { StringOutputParser } from 'langchain/schema/output_parser';
import { RunnableSequence } from 'langchain/schema/runnable';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { formatDocumentsAsString } from 'langchain/util/document';
import { HNSWLib } from 'langchain/vectorstores/hnswlib';
import * as fs from "node:fs";
import path from 'node:path';

import { getEnv } from '../../config/env/index.js'

const fsp = fs.promises;
const files_dir = "./files"

export default class AskAi extends Command {
  static args = {
    question: Args.string({description: 'Question', required: true}),
  }

  static description = 'Answer questions'

  async readFiles(): Promise<string[]> {
    const data: string[] = [];
    const files = await fsp.readdir(files_dir);
    await Promise.all(files.map(async filename => {
			const full = path.join(files_dir, filename);
			const content = await fsp.readFile(full, {encoding: 'utf8'});
			data.push(content);
    }));
    return data;
}

	async run(): Promise<void> {
    const {args} = await this.parse(AskAi)

		const {openApiKey} = await getEnv()


		const files = await this.readFiles()
		const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
		const docs = await textSplitter.createDocuments(files);
		
		
		const model = new ChatOpenAI({
			modelName: 'gpt-3.5-turbo',
			openAIApiKey: openApiKey,
			temperature: 0,
		});

		
		// Create a vector store retriever from the documents.
		const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());

		const retriever = vectorStore.asRetriever();

		
		// Create a system & human prompt for the chat model
		const SYSTEM_TEMPLATE = `Use the following context to answer the question.
		If the answer is not on the context, say you don't know. 
		
		""" context
		{context}
		"""
		`;

		const QUESTION_TEMPLATE = `
		""" question
		{question}
		"""`

		const messages = [
			SystemMessagePromptTemplate.fromTemplate(SYSTEM_TEMPLATE),
			HumanMessagePromptTemplate.fromTemplate(QUESTION_TEMPLATE),
		];
		const prompt = ChatPromptTemplate.fromMessages(messages);

		const chain = RunnableSequence.from([
			{
				question: (input) => input.question,
				// Extract the "question" field from the input object and pass it to the retriever as a string
				sourceDocuments: RunnableSequence.from([
					(input) => input.question,
					retriever,
				]),
			},
			{
				context: (previousStepResult) =>
					formatDocumentsAsString(previousStepResult.sourceDocuments),
				question: (previousStepResult) => previousStepResult.question,
				// Pass the source documents through unchanged so that we can return them directly in the final result
				sourceDocuments: (previousStepResult) => previousStepResult.sourceDocuments,
			},
			{
				result: prompt.pipe(model).pipe(new StringOutputParser()),
				sourceDocuments: (previousStepResult) => previousStepResult.sourceDocuments,
			},
		]);

		const res = await chain.invoke({
			question: args.question,
		});
		this.log(JSON.stringify(res.result, null, 2));
  }
}
