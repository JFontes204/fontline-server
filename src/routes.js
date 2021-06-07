const express = require('express');
const routes = express.Router();

module.exports = routes;

routes.get('/', (req, res) => res.json({ hello: 'Hello world!' }));
routes.get('/report', (req, res) => res.json({ reports: 'All reports' }));
