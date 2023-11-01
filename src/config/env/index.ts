import { transformAndValidate } from 'class-transformer-validator';

import { InvalidConfigError } from '../../errors/invalid-config.error.js';
import { EnvDto } from './env.dto.js';

export async function getEnv(): Promise<EnvDto> {
	const envBuffer = {
		openApiKey: process.env.OPENAI_API_KEY
	}

	let env;
	try {
		env = await transformAndValidate(EnvDto, envBuffer)
	} catch (error){
		throw new InvalidConfigError((error as Error).message)
	}

  return env;
}
