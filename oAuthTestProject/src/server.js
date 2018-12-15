const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
  
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.listen(8000, () => {
    console.log('Server started!');
});
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