const { studentformat, login, deleteSchema, readSchema, updateSchema } = require("./validation")



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


const deleteValidation = (req, res, next) => {
    let validation = deleteSchema.validate(req.params);
    if (validation.error) {
      res.status(401).json({
        success: false,
        message: validation.error.message,
      });
    }
    next();
  };


const readValidation = (req, res, next) => {
    let validation = readSchema.validate(req.body);
    if (validation.error) {
      res.status(401).json({
        success: false,
        message: validation.error.message,
      });
    }
    next();
  };


const updateValidation = (req, res, next) => {
    let validation = updateSchema.validate(req.params);
    if (validation.error) {
      res.status(401).json({
        success: false,
        message: validation.error.message,
      })
      return
    }
    next();
  };
 

module.exports = {Studentval, Studentlog, deleteValidation, readValidation, updateValidation  }