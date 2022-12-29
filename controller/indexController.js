const {validationResult} = require('express-validator');

module.exports = {
    index : (req, res) => {
        return res.render('index', {
            title: 'Colores'
        })
    },
    color : (req, res) => {
        const errors = validationResult(req);
           
              if (errors.isEmpty()) {
                  const {nombre, color, email, edad, remember} = req.body; 
                
                  req.session.Colores = color;
                  res.locals.Colores = req.session.Colores;

                  if(remember){

                    res.cookie('Colores', req.session.Colores, {maxAge: 1000 * 60})

                  } else {

                    req.session.destroy();
                    res.cookie('Colores', null, {maxAge: -1})

                  }

                  return res.render('index', {
                      nombre, 
                      color,                       
                      email, 
                      edad
                    })

              } else {
                  return res.render('index',{
                    old: req.body,
                    errors: errors.mapped()
                  })
        }     
    }, 
    destroy: (req, res) => {
        req.session.destroy();
        res.cookie('Colores', null, {maxAge: -1})
        res.redirect('/')
    } 
      
}   


