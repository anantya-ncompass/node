const { studentformat, login } = require("./validation")



const Studentval = (req, res, next) => {let val = studentformat.validate(req.body)
    if(val.error){
        res.status(401).json({
            success : false,
            message : val.error.message
        })
        return
    }  
    next();
}


const Studentlog = (req, res,next) => {let val = login.validate(req.body)
if(val.error){
    res.status(401).json({
        success : false,
        message : val.error.message
    })
    return
}  
next();
}


module.exports = {Studentval, Studentlog}