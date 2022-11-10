const { SuccessResponseObject } = require('../common/http');
const { Router } = require('express');

const r = Router()

r.get('/', (req, res) => res.json(new SuccessResponseObject('airtable path working')));

module.exports = r;