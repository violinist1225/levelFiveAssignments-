
function middleWare(req, res, next){
    req.soothingColor = {
        color: "blue"
    }
    next()
}




module.exports= middleWare