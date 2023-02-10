// built-in node js os module
const os = require('os');


console.log(os.platform(), os.homedir());
console.log(__dirname);
console.log("My PC is ative from "+ Math.round(os.uptime() / 60 * 100) / 100 + " minutes");