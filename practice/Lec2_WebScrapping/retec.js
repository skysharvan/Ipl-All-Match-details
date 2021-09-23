let request = require("request");
let fs = require("fs");

let link = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-mumbai-indians-30th-match-1254104/live-cricket-score";

request(link , cb);

function cb(error , response , html){
    // console.log(html);
    if( error == null && response.statusCode == 200)
    {
        parseData(html);
    }else if(response.statusCode == 404)
    {
        console.log("page is not found");
    }else{
        console.log(error);
    }
}
function parseData(html){
    fs.writeFileSync("./home.html" , html);
}