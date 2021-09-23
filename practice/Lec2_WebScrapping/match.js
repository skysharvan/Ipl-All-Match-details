// ek match ki details 
let cheerio = require("cheerio");
const request = require("request");
let fs = require("fs");

let link = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-sunrisers-hyderabad-qualifier-2-1237180/full-scorecard";

function getmatches(link)
{
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
    let bothInings = ch(".card.content-block.match-scorecard-table .Collapsible");
     // console.log(bothInings);
   // fs.writeFileSync("./both.html" ,bothInings.html());
   for(let i = 0; i<bothInings.length;i++)
   {
       let teamnames = ch(bothInings[i]).find("h5").text();
       teamnames = teamnames.split("INNINGS")[0].trim();
       console.log(teamnames);
       let  allTrs = ch(bothInings[i]).find(".table.batsman tbody tr ");
       //[<tr></tr> ,<tr></tr> , <tr></tr>  ]
       for(let j = 0 ; j<allTrs.length ; j++)
       {
           let alltd = ch(allTrs[j]).find("td");
           //[<td></td> , <td></td>,<td></td>,<td></td>]
           if(alltd.length > 1)
           {
               let batsmanName = ch(alltd[0]).find("a").text().trim();
               let runs = ch(alltd[2]).text();
               let balls = ch(alltd[3]).text();
               let four = ch(alltd[5]).text();
               let six = ch(alltd[6]).text();
               let sr = ch(alltd[7]).text();
               console.log(`Batsman = ${batsmanName} Runs = ${runs} Ball = ${balls} Four =${four} Six = ${six} SR = ${sr}`);
           }
       }
       
   } 
   console.log("#######################################################")  
}
module.exports = getmatches;