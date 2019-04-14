const bodyParser = require('body-parser');
const express = require('express');
const app = express();
var cors = require('cors');


app.use(cors());
var url = require('url');

app.use(bodyParser.urlencoded({
  extended: true
}));
var path = require('path');
var cookie = require('cookie');
app.use(express.static(path.join(__dirname, '/dist/Atesting')));
app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, '/dist/Atesting/index.html'));

});

app.post('/createTest', (req, res) => {
  res.setHeader('Access-Control-Allow-Headers', 'x-auth, content-type');
  console.log('jeeeeeee');
});
app.use(function(req, res, next) {
  res.status(404).send("Greška .Nije pronađeno!")
});
app.listen(3000, () => {
  console.log("Started on http://localhost:3000");
});