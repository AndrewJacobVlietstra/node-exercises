// Run any code in here upon receiving a request
const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
  next();
};

module.exports = logger;