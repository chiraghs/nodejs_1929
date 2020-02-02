const request=require('request');
const cheerio=require('cheerio');
const fs =require('fs');

//create csv a file to write
const writeStream=fs.createWriteStream('post.csv');
//write Headers
writeStream.write(`Title,Link,Text \n`);

request('https://phpcheckhost.firebaseapp.com/tours',(error,Response,html)=>{
 if(!error && Response.statusCode==200){
     const $ =cheerio.load(html);
     $('.offers_item').each((i,el)=>{
         const title=$(el).find('.offer_name').text();
         const link=$(el).find('a').attr('href');
         const text=$(el).find('.offers_text').text().replace(/,/g,'');
         console.log(title,link,text);
        

         //write Headers
         writeStream.write(`${title}, ${link}, ${text} \n`);

     });
 }

});
