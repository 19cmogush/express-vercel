const { SuccessResponseObject } = require('../common/http');
const { Router } = require('express');
import * as userController from "../controllers/user";

const r = Router()

r.post("/", userController.sendToAirtable);


module.exports = r;