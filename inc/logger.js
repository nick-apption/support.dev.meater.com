
'use strict';

const Winston      = require('winston');
const Moment       = require('moment');
const CircularJSON = require('circular-json');

const Config       = require('../inc/config');

var logFile = null;
// See if we were given different path for logging to a file
for (var arg of process.argv.slice(2)) {
    var outputLogFile = arg.split('--logfile=');
    if (outputLogFile.length > 1) {
        logFile = outputLogFile[1];
    }
}

// Log information to the console
var transports = [
    new Winston.transports.Console({
        timestamp: () => (new Date()).toLocaleTimeString(),
        colorize: true,
        level: 'info',
        formatter(options) {
            return Winston.config.colorize(options.level, options.timestamp() +' ['+ options.level.toUpperCase() +'] '+ (options.message ? options.message : '') +
                (options.meta && Object.keys(options.meta).length ? '\n\t'+ CircularJSON.stringify(options.meta) : ''));
        }
    })
];

// Log information to a file
if (logFile) {
    transports.push(
        new Winston.transports.File({
            filename: `${logFile}`,
            timestamp() {
                return Moment().toISOString();
            },
            json: false,
            level: 'warn',
            formatter(options) {
                return options.timestamp() +' ['+ options.level.toUpperCase() +'] '+ (options.message ? options.message : '') +
                    (options.meta && Object.keys(options.meta).length ? '\n\t'+ CircularJSON.stringify(options.meta) : '');
            }
        })
    );
}


var logger = new Winston.Logger({ transports });
module.exports.info = logger.info;
module.exports.error = logger.error;
module.exports.warn = logger.warn;

if (logFile) {
    logger.info('Will log errors to '+logFile);
}

module.exports.logErrorWithTrace = function(err) {
    if (typeof err === 'object') {
        if (err.message) {
            logger.error('\nError: ' + err.message);
        }
        if (err.stack) {
            logger.error('\nStacktrace:');
            logger.error('====================');
            logger.error(err.stack);
        }
    } else {
        logger.error(err);
    }
};
