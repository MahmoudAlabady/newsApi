//requis
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path');
const hbs = require('hbs')
const NewsApi = require('./tools/NewsApi')
//path
const publicPath = path.join(__dirname,'../public')
app.use(express.static(publicPath)) //public path
///
app.set('view engine', 'hbs');
const viewsPath = path.join(__dirname,'../templates/views')
app.set('views',viewsPath )

const partialsPath = path.join(__dirname,'../templates/partials')
hbs.registerPartials(partialsPath)
//
app.get('',(req, res)=>{
    res.render('index',{
        title:'News Home Page',

    })
} )

NewsApi()
app.listen(port, () => {
    console.log('running',port)
  })