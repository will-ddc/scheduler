const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT || 8081;

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
  res.send({
    status: true,
    message: "Welcome to the app"
  });
});

app.listen(PORT, function(req, res) {
  console.log(`App running on localhost: ${PORT}`);
});