var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user:'guptaayush3108',
    database : 'guptaayush3108',
    host: 'db.imad.hasura-app.io',
    port: 5432,
    password: 'db-guptaayush3108-10234',
}

var app = express();
app.use(morgan('combined'));

var counter=0;
app.get('/counter', function (req, res) {
  counter=counter+1;
  res.send(counter.toString());
});

var names=[];
app.get('/sub', function (req,res) {// /sub?name=xxxx
   var name=req.query.name;
   names.push(name);
   res.send(JSON.stringify(names));
});



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/t', function (req, res) {
    pool.query('select * from "test"', function(err,result){
        if(err){
            res.status(500).send(err.toString());
        } else{
            res.send(JSON.stringify(result,rows));
        }
    });
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/signup', function (req, res) {
  res.sendFile(path.join(__dirname, 'sign up.html'));
});

app.get('/article-one', function (req, res) {
  res.send('Here i am the one');
});

app.get('/article-two', function (req, res) {
  res.send('Here i am the two');
});

app.get('/third', function (req, res) {
  res.send('Here i am the third');
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
