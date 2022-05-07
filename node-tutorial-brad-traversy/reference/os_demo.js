const os = require('os');

// Platform
console.log(os.platform());

// CPU architecture
console.log(os.arch());

// CPU core info
console.log(os.cpus());

// Free memory info
console.log(os.freemem());
console.log(os.totalmem());

// Home directory
console.log(os.homedir());

// Uptime (how long system has been on in seconds)
console.log(os.uptime());