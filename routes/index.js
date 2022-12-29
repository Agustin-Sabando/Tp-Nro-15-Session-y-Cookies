var express = require('express');
var router = express.Router();
const validacionFormulario = require('../validations/validacionFormulario')

const {index, color, destroy} = require('../controller/indexController')


router
.get('/', index)
.post('/', validacionFormulario, color)
.get('/destroy', destroy)

module.exports = router;
