var express = require('express');
var router = express.Router();
const validacionFormulario = require('../validations/validacionFormulario')

const {index, color, logout, destroy} = require('../controller/indexController')


router
.get('/', index)
.post('/', validacionFormulario, color)
.get('/logout', logout)
.get('/destroy', destroy)

module.exports = router;
