const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', { id: uuid.v4(), msg });
  }
}

const logger = new Logger();

logger.on('message', data => console.log(data));

logger.log('Hey there');
logger.log('Nice to meet ya');
logger.log('Good day sir');