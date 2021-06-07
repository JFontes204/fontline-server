require('dotenv').config();
//const cors = require('cors');
const express = require('express');
const routes = require('./routes');
require('./database');

const app = express();

//app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3002, () =>
  console.log(
    `fontline-server app is running on: ${
      process.env.PORT ? process.env.APP_URL : 'http://' + process.env.APP_URL + ':3002'
    }`
  )
);
