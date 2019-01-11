#!/usr/bin/env node
import * as debug from 'debug';
import * as touch from 'touch';
import * as yargs from 'yargs';

const log = debug('restart-nodemon');

const argv = yargs.env('RESTART').option('touch', {
    alias: 't',
    describe:
        'If present, trigger restart by touching the given file(s). Comma-separated list of file paths to touch.',
    type: 'string',
}).argv;

(async function main() {
    if (argv.touch) {
        const filesToTouch = argv.touch.split(',');

        for (const fileToTouch of filesToTouch) {
            log('Touching', fileToTouch);
            touch(fileToTouch);
        }
    }

    if (!argv.touch) {
        console.warn('Nothing to touch, not doing anything.');
    }
})();
