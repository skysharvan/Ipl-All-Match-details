let request = require("request");
let fs = require("fs");

let link = "https://www.iplt20.com/matches/schedule/men";
request(link , cb);

function cb(error , response , html){
    if(error == null && response.statusCode == 200)
    {
        parseData(html);
    }
    else if(response.statusCode == 404)
    {
        console.log("Page is Not Found");
    }
    else{
        console.log(error);
    }
}

function parseData(html)
{
    fs.writeFileSync("./home.html" , html); 
}
