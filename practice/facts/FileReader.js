let fs = require("fs");
let cheerio = require("cheerio");

// let f = fs.readFileSync("f1.txt");
//  console.log(f+"")
let htmlkedata = fs.readFileSync("practice1.html");
// console.log(htmlkedata + "");

let ch = cheerio.load(htmlkedata);
// let h3kedata = ch("h3").text();
// console.log(h3kedata);

let pkedata = ch("p");

// [ <p>fvjnk</p> , <p>jfdvhb</p>]
console.log(pkedata.length);
// method 1 
// let pkfirst = ch(pkedata[1]).text();
// console.log(pkfirst)
let pkdata = ch(".pa").text();
// console.log(pkdata)
let pkeedata = ch(".pa1").text();
console.log(pkeedata)

// git add .
//git commit -m "kfknj"
//git push -u origin master/main






