# Word Search CLI
## Introduction
This is the `word_search_cli` which allows you to build, test and containerize the source for `word_search_api` and `word_search_system`.
The CLI requires Node JS, so please ensure that it is installed.


## Build Docker Images
You can build from the source easily using the cli which ships with word_search:

### Clone CLI Tool and Install it
To install it, clone the source and run `npm link` command in the source directory.
If at any time you want to uninstall it, simply run `npm unlink` from the source directory
```sh
git clone https://github.com/chrisjpalmer/word_search_cli && cd word_search_cli && npm link
```

### Find a blank directory for the project
The CLI needs some scratch space to build your project. Find a nice directory and `cd` into it. Then run `word_search_cli init`
```sh
cd /my/blank/proj/dir #specify a blank project directory
word_search_cli init #initializes a new word_search_proj in your current directory
```

### Prepare Docker Machine
The CLI uses docker to build the image for your target. Ensure that your shell is setup to talk with a docker machine.
If you have docker installed the normal way on your machine (i.e. not docker toolbox), you won't need to run this command.
```sh
eval $(docker-machine env default) #Linux or Mac
```

### Build source via the CLI
```sh
word_search_cli build --build-repo-tag=1.0.0 --src-repo-tag=1.0.0 word_search_api #see https://github.com/chrisjpalmer/word_search_api for more tags
word_search_cli build --build-repo-tag=1.0.0 --src-repo-tag=1.0.0 word_search_system #see https://github.com/chrisjpalmer/word_search_system for more tags
```