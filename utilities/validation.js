const joi = require("joi");

const login = joi.object({
email : joi.string().email().required(),
password : joi.string().min(8).required()
})

const studentformat = joi.object({
//ID : joi.string().required(),
NAME : joi.string().required(),
DEPARTMENT : joi.string().required(),
CGPA : joi.number().required() 
})

module.exports = {
login,
studentformat
};
