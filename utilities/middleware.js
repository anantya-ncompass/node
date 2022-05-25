const { login, product } = require("./validation");

const logval = (req, res, next) => {let val = login.validate(req.body)
    if(val.error){
        res.status(401).json({
            success : false,
            message : val.error.message
        })
        return;
    }  
    next();
};


const productval = (req, res, next) => {let val = product.validate(req.query)
    if(val.error){
        res.status(401).json({
            success : false,
            message : val.error.message
        })
        return;
    }  
    next();
}


module.exports = {
    logval,
    productval
};