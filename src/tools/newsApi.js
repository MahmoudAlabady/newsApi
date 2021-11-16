const request = require('request');
const newsApi = (callback)=>{
    const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-10-15&sortBy=publishedAt&apiKey=48cd4bc78ca2470280971a3171cc432e'
    request({url,json:true},(err,res)=>{
        if(err){
            callback('Unable to connect ',undefined)
        }
        else {
           // console.log(res.body.articles)
           callback(undefined,res.body.articles)
        }
    })
}

module.exports = NewsApi