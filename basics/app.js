// builtin node js some modules

const os = require('os');
const fs = require('fs');

console.log(os.platform(), os.homedir());
console.log("My PC is ative from "+ Math.round(os.uptime() / 60 * 100) / 100 + " minutes");


fs.readFileSync('./content/sub/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});

// fs.writeFileSync('./content/sub/first.txt', 'Hello Ahdusians', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// });


// // write at files end
// fs.writeFileSync('./content/sub/first.txt', ', Hello ', { flag: 'a' }, (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// });