const { SuccessResponseObject } = require('../common/http');
const { Router } = require('express');
import Airtable, { Base } from "airtable";


const r = Router()

r.get('/', (req, res) => res.json(new SuccessResponseObject('airtable path live 🚀')));

module.exports = r;