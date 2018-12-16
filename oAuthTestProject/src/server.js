const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const database = require('./database/db');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  }


//DB
setTimeout(function(){
    database.query();
});

//CORS
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.listen(8000, () => {
    console.log('Server started!');
});

//REST API
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('zz');
});

app.route('/api/cats').get((req, res) => {
    res.send({
        cats: [{ name: 'lilly' }, { name: 'lucy' }]
    });
});
app.route('/api/cats/:catname').get((req, res) => {
    const requestedCatName = req.params['catname'];
    res.send({cats: requestedCatName});
});

app.route('/api/cats').post((req, res) => {
    res.send(201, req.body);
});

app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body);
});

app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204);
});