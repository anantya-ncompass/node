const joi = require("joi");


const login = joi.object({
email : joi.string().email().required(),
password : joi.string().min(8).required()
})


const studentformat = joi.object({
ID : joi.string().required(),
NAME : joi.string().required(),
DEPARTMENT : joi.string().required(),
CGPA : joi.number().required() 
})


const deleteSchema = joi.object({
    ID: joi.string().min(4).required(),
  });


const readSchema = joi.object({
    col_name: joi.string().required(),
  });


const updateSchema = joi.object({
    ID: joi.string().required(),
    NAME: joi.string().required(),
  });


module.exports = {
login,
studentformat,
deleteSchema,
readSchema,
updateSchema
};
