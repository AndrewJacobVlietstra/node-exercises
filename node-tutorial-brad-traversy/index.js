const Logger = require('./logger');

const logger = new Logger();

logger.on('message', data => console.log(data));

logger.log('Hey there');
logger.log('Nice to meet ya');
logger.log('Good day sir');