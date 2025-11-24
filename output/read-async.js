const fs = require("fs");

console.log("start reading");

const data = fs.readFile("../data/diary.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("error thrown, block the cycle");
  }
  console.log("content start from here");
  console.log(data);
});

console.log("finished");
