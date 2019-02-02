import * as shell from 'shelljs';
export function dockerBuild(directory: string, imageName:string, tag: string, buildArgs: any) {
    //Basic command
    let cmd = `docker build -t ${imageName}:${tag}`;

    //Build Args
    let buildargs = Object.keys(buildArgs).map(k => {
        return `--build-arg ${k}=${buildArgs[k]}`;
    }).join(' ');
    cmd = `${cmd} ${buildargs}`;

    cmd += " .";

    shell.cd(directory);
    console.log(cmd);
    shell.exec(cmd, {
        silent: false,
    });
    shell.cd('../');
}

export function dockerPush(imageName:string, tag:string) {
    shell.exec(`docker push ${imageName}:${tag}`);
}