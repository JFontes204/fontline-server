require('dotenv').config();
const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

let connection;
module.exports = connection;

if (process.env.DATABASE_URL !== undefined) {
  // the application is executed on Heroku ... use the postgres database
  connection = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    ssl: { rejectUnauthorized: false },
    dialectOptions: { ssl: true },
  });
} else {
  // the application is executed on the local machine
  process.env.DATABASE_URL === undefined ? (dbConfig.ssl = {}) : null;
  process.env.DATABASE_URL === undefined ? (dbConfig.dialectOptions = {}) : null;
  connection = new Sequelize(dbConfig);
}

require('../models/initModels');
