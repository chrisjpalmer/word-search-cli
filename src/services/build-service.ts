import * as shell from 'shelljs';
import * as fs from 'fs';
import * as path from 'path';
import { dockerBuild, dockerPush } from '../helpers/docker';
import { cli } from 'cli-ux';
import { deleteFolder } from '../helpers/dir';

interface TargetConfig {
    buildRepoUrl: string;
    imageName: string;
    cloneFolder:string;
}

export type BuildTarget = 'word_search_system' | 'word_search_api'

export interface BuildServiceParams {
    projectDir: string,
    buildRepoTag: string;
    srcRepoTag: string;
    target: BuildTarget;
}

export class BuildService {
    async build(params:BuildServiceParams) {
        //Get target config
        let targetConfig = this.getTargetConfig(params.target);
        
        //
        //Cleanup Build Folder
        //

        //Cd into the project directory
        shell.cd(params.projectDir);

        //Delete the temp folder
        let tempFolder = path.join(params.projectDir, 'temp');
        if (!!fs.existsSync(tempFolder)) {
            await deleteFolder(tempFolder);
        }

        //Create the temp folder again
        shell.mkdir('temp');

        //
        //Get Build Repo
        //

        //cd into the temp folder
        shell.cd('temp');

        //Check out the build repo source
        shell.exec(`git clone --progress --verbose --branch=${params.buildRepoTag} ${targetConfig.buildRepoUrl} ${targetConfig.cloneFolder}`);
        shell.cd(targetConfig.cloneFolder);
        let checkedOutTag = shell.exec(`git describe --exact-match --tag HEAD`,{silent:true}).stdout;
        if (checkedOutTag.toString().trim() !== params.buildRepoTag) {
            throw 'cannot check the build repo out to the specified tag... tags do no match';
        }
        shell.cd('../');

        //
        //Docker build
        //
        console.log('\n\nPERFORMING DOCKER BUILD...\n\n')
        dockerBuild(targetConfig.cloneFolder, targetConfig.imageName, params.srcRepoTag, {
            'SRC_TAG': params.srcRepoTag
        });

        //
        //Docker push
        //
        // if (!await cli.confirm('\n\n\nWe will now perform docker push, would you like to proceed?')) {
        //     console.log('not running docker push')
        //     return;
        // }
        // if (!await cli.confirm('Are you logged in as chrisjpalmer? You cannot perform push if you are not logged in as chrisjpalmer.')) {
        //     console.log('not running docker push')
        //     return;
        // }
        // dockerPush(targetConfig.imageName, params.srcRepoTag);
    }

    private getTargetConfig(target: BuildTarget): TargetConfig {
        switch (target) {
            case 'word_search_system':
                return {
                    buildRepoUrl: 'https://github.com/chrisjpalmer/word_search_system_builder',
                    imageName: 'chrisjpalmer/word_search_system',
                    cloneFolder: 'word_search_system_builder',
                }
            case 'word_search_api':
                return {
                    buildRepoUrl: 'https://github.com/chrisjpalmer/word_search_api_builder',
                    imageName: 'chrisjpalmer/word_search_api',
                    cloneFolder: 'word_search_api_builder',
                }
        }
        throw 'unsupported target config';
    }
}