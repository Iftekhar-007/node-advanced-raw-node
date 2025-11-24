const os = require("os");

console.log(os.platform());

console.log(os.cpus()[0]);
console.log(os.totalmem() / 1024 / 1024 / 1024, "GB");
console.log(os.freemem() / 1024 / 1024 / 1024, "GB");
console.log(os.arch());
console.log(os.machine());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.userInfo());
console.log(os.release());
console.log(os.version());
console.log(os.loadavg());
console.log(os.availableParallelism());
