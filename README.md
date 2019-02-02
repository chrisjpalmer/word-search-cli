word-search-cli
===============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/word-search-cli.svg)](https://npmjs.org/package/word-search-cli)
[![Downloads/week](https://img.shields.io/npm/dw/word-search-cli.svg)](https://npmjs.org/package/word-search-cli)
[![License](https://img.shields.io/npm/l/word-search-cli.svg)](https://github.com/chrisjpalmer/word-search-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g word-search-cli
$ word-search-cli COMMAND
running command...
$ word-search-cli (-v|--version|version)
word-search-cli/0.0.0 win32-x64 node-v10.15.0
$ word-search-cli --help [COMMAND]
USAGE
  $ word-search-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`word-search-cli build TARGET`](#word-search-cli-build-target)
* [`word-search-cli hello [FILE]`](#word-search-cli-hello-file)
* [`word-search-cli help [COMMAND]`](#word-search-cli-help-command)
* [`word-search-cli init [FILE]`](#word-search-cli-init-file)

## `word-search-cli build TARGET`

describe the command here

```
USAGE
  $ word-search-cli build TARGET

ARGUMENTS
  TARGET  (word-search-system|word-search-api) the target to build

OPTIONS
  -h, --help                       show CLI help
  --build-repo-tag=build-repo-tag  (required) the tag of the build repo which will be used to build the target
  --src-repo-tag=src-repo-tag      (required) the source code tag to build in conjunction with the build-repo
```

_See code: [src\commands\build.ts](https://github.com/chrisjpalmer/word-search-cli/blob/v0.0.0/src\commands\build.ts)_

## `word-search-cli hello [FILE]`

describe the command here

```
USAGE
  $ word-search-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ word-search-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/chrisjpalmer/word-search-cli/blob/v0.0.0/src\commands\hello.ts)_

## `word-search-cli help [COMMAND]`

display help for word-search-cli

```
USAGE
  $ word-search-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src\commands\help.ts)_

## `word-search-cli init [FILE]`

describe the command here

```
USAGE
  $ word-search-cli init [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src\commands\init.ts](https://github.com/chrisjpalmer/word-search-cli/blob/v0.0.0/src\commands\init.ts)_
<!-- commandsstop -->
