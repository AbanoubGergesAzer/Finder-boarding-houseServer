exports.authentication = (req,res,next) => {
    
    if(typeof req.headers['authorization'] !== 'undefined'){
        
        bearer = req.headers['authorization'].split(' ')
        token = bearer[1];
        next()
    }else{
        res.status(403).send('forbidden')
    }
}