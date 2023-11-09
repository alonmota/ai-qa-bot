AI-QA-BOT
=================

A cli tool that reads up provided documents and answer questions about them

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @alonmota/ai-qa-bot
$ bot COMMAND
running command...
$ bot (--version)
@alonmota/ai-qa-bot/0.0.1 linux-x64 node-v18.16.0
$ bot --help [COMMAND]
USAGE
  $ bot COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bot ask-ai "What is the purpose of this cli tool?"`](#bot-ask-ai-what-is-the-purpose-of-this-cli-tool)
* [`bot help [COMMANDS]`](#bot-help-commands)

## `bot ask-ai "What is the purpose of this cli tool?"`

Answer questions about a set of documents

```
USAGE
  $ bot ask-ai "What is the purpose of this cli tool?"

ARGUMENTS
  QUESTION  Question

FLAGS
  -f, --pathToFolder=<value>  [default: ./files] Path to folder containing the documents

DESCRIPTION
  Answer questions about a set of documents


  Load a folder with the set of files you want to query upon, you can use pdf, txt, md or doc files.
  Than ask a question, the system will read all files in the folder and answer according to the content on them


EXAMPLES
  Display command options

    $ bot ask --help

  Make a question

    $ bot ask "QUESTION HERE"

  Provide a path to a folder containing relevant files

    $ bot ask "What is the purpose of this cli?" -f="./files"
```

_See code: [src/commands/ask/index.ts](https://github.com/alonmota/ai-qa-bot/blob/v0.0.1/src/commands/ask/index.ts)_

## `bot help [COMMANDS]`

Display help for bot.

```
USAGE
  $ bot help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for bot.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.20/src/commands/help.ts)_
<!-- commandsstop -->
