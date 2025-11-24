const fs = require("fs");

console.log("start reading");

try {
  const data = fs.readFileSync("../data/diary.txt", "utf-8");
  console.log("content starts here");
} catch (error) {
  console.log(error.message);
}

console.log(data);
console.log("data finished");
