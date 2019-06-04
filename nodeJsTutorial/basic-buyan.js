const bunyan = require('bunyan');
const log = bunyan.createLogger({name: 'logger'});

log.info({ port: 1000});