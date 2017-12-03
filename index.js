// Test

var express = require('express');
var app = express();

var nano = require('nano')('http://localhost:5984');

app.set('view engine', 'pug');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.send("");
});

app.get('/prime', function (req, res) {
  res.render('prime', { title: "Warframe Market+" });
});

app.get('/mods', function (req, res) {
  res.render('mods', { title: "Warframe Market+" });
});

app.post('/get_items', function (req, res) {
    var item_db = nano.use('item_db');
    item_db.list({include_docs: true}, function(err, body) {
        console.log(body);
        res.send(body);
    });
});

app.post('/get_mods', function (req, res) {
    var item_db = nano.use('mod_db');
    item_db.list({include_docs: true}, function(err, body) {
        console.log(body);
        res.send(body);
    });
});

app.listen(8080);