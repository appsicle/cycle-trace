var express = require('express');
var app = express();
var data = require('./data.json');
var starting = require('./starting.json');
var ending = require('./ending.json');
var seasons = require('./seasons.json');
var routes = require('./routes.json');


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', function(req, res){
    res.send(data);
});

app.get('/starting', function(req, res){
    res.send(starting);
});

app.get('/ending', function(req, res){
    res.send(ending);
});

app.get('/seasons', function(req, res){
    res.send(seasons);
});

app.get('/routes', function(req, res){
    res.send(routes);
});

app.listen(3000, ()=>{
    console.log('listening on 3000');
});


