const joi = require("joi");


const login = joi.object({
email : joi.string().email().required(),
password : joi.string().min(8).required()
});


const product = joi.object({
    page: joi.number().required(),
    sort: joi.string(),
    filter: joi.string()
});

module.exports = {
    login,
    product
};