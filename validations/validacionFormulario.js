const {check} = require('express-validator');

module.exports = [

    check('nombre')
        .notEmpty().withMessage('Debe Completar El Campo De Nombre.'),

    check('color')
        .notEmpty().withMessage('Debe Seleccionar Un Color De La Lista.'),  

    check('email')
        .notEmpty().withMessage('Debe Completar El Campo Del Email.').bail()
        .isEmail().withMessage('Email inválido, inténtelo denuevo.'),

    check('edad')    
    .optional({nullable: true, checkFalsy: true}).isInt().withMessage('Debe Completar El Campo Con Un Número.')
        
]
