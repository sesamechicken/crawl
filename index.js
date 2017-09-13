var express = require('express');
var path = require('path');
var request = require('request');

let app = express(); 

app.set('view engine', 'jade'); 

request('http://project107.net', (err, res, body) => {
// console.log(body); 
console.log(res.headers); 
}); 

app.get('*', (req, res) => { 
// res.sendFile('index.html', {root: __dirname }); 
}); 

app.listen(3000, () => { 
console.log(`App listening on 3000`); 
});