var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user:'guptaayush3108',
    database : 'guptaayush3108',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
}

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'Article One | Aayush Gupta',
        heading: 'Article One',
        date: 'Sep 5, 2017',
        content:`
        <p>        
            Thi ThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThiThi
        </p>
        <p> ThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdas
        </p>`
    },
    'article-two':{
        title: 'Article Two | Aayush Gupta',
        heading: 'Article Two',
        date: 'Sep 10, 2017',
        content:`
        <p> ThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdas
        </p>`
    },
    'article-three': {
        title: 'Article Three | Aayush Gupta',
        heading: 'Article Three',
        date: 'Sep 15, 2017',
        content:`
        <p> ThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasckThiisdasc....................
        </p>`
    }
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
    <head>
    <title>
        ${title}
    </title>
    <meta name="viewport" contetn="width-device-width",initia-scale-1 />
    </head>
    <body>
    <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr />
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
    </div>
    </body>
    </html>`;
    return htmlTemplate;
}

app.get('/:articleName', function (req, res) {
    //articleName=article-one\
    var articleName=req.params.articleName;
    res.send(createTemplate(articles(articleName)));
});

var pool = new Pool(config);

app.get('/test-db', function (req, res) {
    //make a select request
    //return a response with a result
    pool.query('SELECT * FROM test', function (err, result) {
        if(err){
            res.status(500).send(err.toString());
        }else{
            res.send(JSON.stringify(result.rows));
        }
    });
});

app.get('/artice', function (req, res) {
    
    pool.query("SELECT * FROM article",req.parans.aarticleName, function (err, result) {
        if(err){
            res.status(500).send(err.toString());
        }else{
            res.send(JSON.stringify(result.rows));
        }
    });
  res.send(createTemplate(art));
});


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
