import * as fs from 'fs';
import * as path from 'path';
import * as rimraf from 'rimraf';

const WORK_DIR = _findWorkDir(process.cwd());

function _findWorkDir(dir:string): string | any {
    if(fs.readdirSync(dir).indexOf('word_search_proj.json') !== -1) {
        return dir;
    }
    let topDir = path.dirname(dir);
    if(topDir === dir) {
        return null;
    }
    return _findWorkDir(topDir);
}

export function getProjectDir(): string {
    return WORK_DIR;
}

export function makeProjectDir() {
    fs.writeFileSync(path.join(process.cwd(), 'word_search_proj.json'), JSON.stringify({}));
}

export async function deleteFolder(folder:string) {
    await new Promise((resolve, reject) => {
        rimraf(folder, (e) => {
            if(e) {
                reject(e);
                return;
            }
            resolve();
        })
    })
}