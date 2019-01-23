var express = require('express');

var app = express();

app.get('/', function(req,res){
   res.render('index.ejs', {title: 'Hello world'})
});

app.get('/about', function(req,res){
    res.render('layout.ejs', {title: 'about Us', body: '<h1>about us</h1>'})
});

app.get('/*', function(req,res){
    res.status(404).render('error.ejs', {title: 'Error!'})
});

console.log('local host:3000 is running');
app.listen(3000);