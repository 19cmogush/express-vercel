const { SuccessResponseObject } = require('../common/http');
const { Router } = require('express');


import Airtable, { Base } from "airtable";


const r = Router()

r.post('/', (req, res) => {
  res.send("Success?")
}

module.exports = r;