var fs = require('fs');
var items = JSON.parse(fs.readFileSync('./git-items.json', 'utf8'));

items.sort((a,b) => a.product > b.product ? -1: 1);
var sorted = items.slice(0, 1501);

var selected = [];

var count = 0;
do {
  let random1 = getRandomInt(1, 30);
  console.log(random1);
  if(matchCondition(sorted[random1])) {
    selected.push(sorted[random1]);
    count++;
  }
} while(count < 5)

console.log("--------------------------------");

count = 0;
do {
  let random1 = getRandomInt(30, 100);
  console.log(random1);
  if(matchCondition(sorted[random1])) {
    selected.push(sorted[random1]);
    count++;
  }
} while(count < 20)

console.log("--------------------------------");

count = 0;
do {
  let random1 = getRandomInt(100, 400);
  console.log(random1);
  if(matchCondition(sorted[random1])) {
    selected.push(sorted[random1]);
    count++;
  }
} while(count < 30)

console.log("--------------------------------");

count = 0;
do {
  let random1 = getRandomInt(400, 700);
  console.log(random1);
  if(matchCondition(sorted[random1])) {
    selected.push(sorted[random1]);
    count++;
  }
} while(count < 30)

console.log("--------------------------------");

count = 0;
do {
  let random1 = getRandomInt(700, 1000);
  console.log(random1);
  if(matchCondition(sorted[random1])) {
    selected.push(sorted[random1]);
    count++;
  }
} while(count < 10)

console.log("--------------------------------");

count = 0;
do {
  let random1 = getRandomInt(1000, 1500);
  console.log(random1);
  if(matchCondition(sorted[random1])) {
    selected.push(sorted[random1]);
    count++;
  }
} while(count < 5)

console.log("--------------------------------");


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function matchCondition(item) {
  return item.email && (item.company == null ||
    item.company.toLowerCase().indexOf("thoughtworks") == -1);
}

fs.writeFile ("selected-items.json", JSON.stringify(selected), function(err) {
    if (err) throw err;
    console.log('complete');
  }
);