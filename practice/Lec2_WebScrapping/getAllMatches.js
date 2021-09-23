let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
const getmatches = require("./match");

function getAllMatches(link)
{   console.log(link);
    request(link , cb);
}


function cb(error , response , html)
{

if(error == null && response.statusCode == 200)
  {
    parseData(html);
   }else if(response.statusCode == 404)
   {
       console.log("Page is not found");
   }else{
       console.log(error);
   }
}

function parseData(html){
    let ch = cheerio.load(html);
    // all matches ki aTag nikalo
    let allaTag = ch('a[ data-hover="Scorecard"] ');
    console.log(allaTag.length);
    for(let i = 0 ; i<allaTag.length ;i++)
    {
        let link = ch(allaTag[i]).attr("href");
        let completelink = "https://www.espncricinfo.com"+link;
        // console.log(completelink);
        getmatches(completelink);
    }
}

module.exports = getAllMatches;