const fs = require("fs");

console.log("start");

const content2 = "\n hello it is asynchronus, \n here I started another war";

// fs.writeFile("./file-async.txt", content2, (error) => {
//   if (error) {
//     console.log("error heppening");
//   } else {
//     console.log("file added async way");
//   }
// });

fs.appendFileSync("./file-async.txt", content2);

console.log("finished");
