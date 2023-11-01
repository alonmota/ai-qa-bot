oclif-hello-world
=================

oclif example Hello World CLI

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
$ npm install -g ai-qa-bot
$ bot COMMAND
running command...
$ bot (--version)
ai-qa-bot/0.0.0 linux-x64 node-v18.16.0
$ bot --help [COMMAND]
USAGE
  $ bot COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bot ask-ai QUESTION`](#bot-ask-ai-question)
* [`bot ask-ai world`](#bot-ask-ai-world)
* [`bot help [COMMANDS]`](#bot-help-commands)
* [`bot plugins`](#bot-plugins)
* [`bot plugins:install PLUGIN...`](#bot-pluginsinstall-plugin)
* [`bot plugins:inspect PLUGIN...`](#bot-pluginsinspect-plugin)
* [`bot plugins:install PLUGIN...`](#bot-pluginsinstall-plugin-1)
* [`bot plugins:link PLUGIN`](#bot-pluginslink-plugin)
* [`bot plugins:uninstall PLUGIN...`](#bot-pluginsuninstall-plugin)
* [`bot plugins:uninstall PLUGIN...`](#bot-pluginsuninstall-plugin-1)
* [`bot plugins:uninstall PLUGIN...`](#bot-pluginsuninstall-plugin-2)
* [`bot plugins update`](#bot-plugins-update)

## `bot ask-ai QUESTION`

Answer questions

```
USAGE
  $ bot ask-ai QUESTION

ARGUMENTS
  QUESTION  Question

DESCRIPTION
  Answer questions
```

_See code: [src/commands/ask-ai/index.ts](https://github.com/alonmota/ai-qa-bot/blob/v0.0.0/src/commands/ask-ai/index.ts)_

## `bot ask-ai world`

Say hello world

```
USAGE
  $ bot ask-ai world

DESCRIPTION
  Say hello world

EXAMPLES
  $ bot ask-ai world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/ask-ai/world.ts](https://github.com/alonmota/ai-qa-bot/blob/v0.0.0/src/commands/ask-ai/world.ts)_

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

## `bot plugins`

List installed plugins.

```
USAGE
  $ bot plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ bot plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/index.ts)_

## `bot plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bot plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bot plugins add

EXAMPLES
  $ bot plugins:install myplugin 

  $ bot plugins:install https://github.com/someuser/someplugin

  $ bot plugins:install someuser/someplugin
```

## `bot plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ bot plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ bot plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/inspect.ts)_

## `bot plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bot plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bot plugins add

EXAMPLES
  $ bot plugins:install myplugin 

  $ bot plugins:install https://github.com/someuser/someplugin

  $ bot plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/install.ts)_

## `bot plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ bot plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help      Show CLI help.
  -v, --verbose
  --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ bot plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/link.ts)_

## `bot plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bot plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bot plugins unlink
  $ bot plugins remove
```

## `bot plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bot plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bot plugins unlink
  $ bot plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/uninstall.ts)_

## `bot plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bot plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bot plugins unlink
  $ bot plugins remove
```

## `bot plugins update`

Update installed plugins.

```
USAGE
  $ bot plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.9.4/src/commands/plugins/update.ts)_
<!-- commandsstop -->
