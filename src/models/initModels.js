const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const connection = new Sequelize(dbConfig);

const Student = require('./Student');
const Course = require('./Course');
const Certificate = require('./Certificate');
const Fee = require('./Fee');
const Payment = require('./Payment');

function initAll() {
  Student.init(connection);
  Course.init(connection);
  Certificate.init(connection);
  Fee.init(connection);
  Payment.init(connection);
}

function associateAll() {
  Student.associate(connection.models);
  Course.associate(connection.models);
  Certificate.associate(connection.models);
  Fee.associate(connection.models);
  Payment.associate(connection.models);
}
(async function () {
  await initAll();
  await associateAll();
})();
