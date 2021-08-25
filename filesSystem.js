let fs = require("fs");
console.log("Before");
// let content = fs.readFileSync("cba.js");
// console.log(content);
// js dev can't create an asyncchronous function

fs.readFile("cba.js" , cba);

function cba(err , data){
    if(err){
        console.log("Error"  + err)
    }
    else {
        console.log("content"  + data);
    }
}
console.log("After");
