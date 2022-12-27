module.exports = (req, res, next) => {
    if(req.cookies.Colores){
        req.session.Colores = req.cookies.Colores
    }
    next()
}

