import {Command, flags} from '@oclif/command'
import { getProjectDir, makeProjectDir } from '../helpers/dir';


export default class Init extends Command {
  static description = 'initialize the word-search-project in the current directory'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {args, flags} = this.parse(Init)

    //Initialize the word-search-project in the current directory
    if(!!getProjectDir()) {
      this.error('cant initialize a word search project here because this is either a subdirectory or the main directory of an existing project');
    }

    makeProjectDir();
    this.log('project initialized in current directory');
  }
}
