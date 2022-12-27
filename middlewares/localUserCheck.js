module.exports = (req, res, next) => {
    if(req.session.Colores){
        res.locals.Colores = req.session.Colores
    }
    next()
}