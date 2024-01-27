const express = require('express')
const router = express.Router()
const {signup} = require('../controller/auth.controller.js')


router.get('/signup', signup)

module.exports= router;