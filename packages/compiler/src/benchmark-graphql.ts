import {spawnSync} from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';
import {promisify} from 'util';

const access = promisify(fs.access);
const copyFile = promisify(fs.copyFile);
const mkdtemp = promisify(fs.mkdtemp);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

async function main() {
    const scratch = await mkdtemp(path.join(os.tmpdir(), 'bench-'));

    process.chdir(scratch);

    const corpus = path.join(
        __dirname,
        '../../../support/client-corpus.graphql',
    );
    const script = path.join(__dirname, '../lib/benchmark.js');

    try {
        await access(script, fs.constants.R_OK);
    } catch (error) {
        console.log(
            `Unable to access ${script}; did you forget to run "yarn build"?`,
        );
        return;
    }

    await copyFile(corpus, 'client-corpus.graphql');

    const scriptSource = await readFile(script, 'utf8');

    const modifiedSource = scriptSource
        .replace('require("./parse")', 'require("graphql").parse')
        .replace('../../../support', '.');

    await writeFile('benchmark.js', modifiedSource);

    spawn('yarn', 'init', '-y');
    spawn('yarn', 'add', 'graphql');
    spawn('node', 'benchmark.js');
}

function spawn(command: string, ...args: Array<string>) {
    const {error, signal, status, stdout} = spawnSync(command, args, {
        stdio: 'inherit',
    });

    if (status !== 0 || signal !== null || error) {
        throw new Error('Something bad happened');
    }

    return stdout;
}

main().catch((error) => {
    console.log(error);
});
