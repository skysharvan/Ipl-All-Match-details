let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
const getAllMatches = require("./getAllMatches");



let link ="https://www.espncricinfo.com/series/ipl-2020-21-1210595";

request(link , cb);

function cb(error , response , html)
{
// console.log(html);
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
     //fs.writeFileSync("./home.html" , html);
     let ch = cheerio.load(html);
     let aTag = ch(".widget-items.cta-link a").attr("href");
    // console.log(aTag);
    let completelink = "https://www.espncricinfo.com"+aTag;
    //console.log(completelink);
    
   getAllMatches(completelink);
 }
  //i want to take scorcard of all matches

  