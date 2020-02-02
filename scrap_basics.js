const request =require('request');
const cheerio =require('cheerio');

request('https://vuejs.org/v2/guide/',(error,Response,html)=>{
    if(!error && Response.statusCode==200){
        const $ =cheerio.load(html);

        const Head = $('#ad').next();
        console.log(Head.html());



        const output=Head.find('h1').text();
        const output=Head.find('h1').parent().text();
        const output=Head.children('h1').next();





      $('.menu-root').each((i,elem)=>{
            const text=$(elem).find('li').text();
            console.log(text);

        });
    }

});