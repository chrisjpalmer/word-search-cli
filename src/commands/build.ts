import {Command, flags} from '@oclif/command'
import * as Parser from '@oclif/parser';
import { getProjectDir } from '../helpers/dir';
import { cli } from 'cli-ux';
import { BuildService } from '../services/build-service';


export default class Build extends Command {
  static description = 'build components of the word_search stack into docker containers'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    ['build-repo-tag']: flags.string({description: 'the tag of the build repo which will be used to build the target', required:true}),
    ['src-repo-tag']: flags.string({description: 'the source code tag to build in conjunction with the build-repo', required:true})
  }

  static args:Parser.args.IArg[] = [{name: 'target', description:'the target to build', required:true, options:['word_search_system', 'word_search_api']}]

  async run() {

    //
    //VALIDATION
    //
    //Get command line arguments
    const {args, flags} = this.parse(Build);
    let buildService = new BuildService();
    
    //We need a working directory
    let projectDir = getProjectDir();
    if(!projectDir) {
      this.error('the project does not exist')
    }

    if(!await cli.confirm('Did you run "docker-machine env" in this shell before this command? In other words will docker commands work?')) {
      this.log('please run docker-machine env XXX')
      this.exit();
    }

    //
    //BUILD
    //
    try {
      await buildService.build({
        target:args.target,
        projectDir,
        buildRepoTag: flags['build-repo-tag'],
        srcRepoTag: flags['src-repo-tag']
      });
    } catch(e) {
      this.error(e);
    }
  }

  
}
