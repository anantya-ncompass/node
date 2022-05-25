const joi = require("joi");


const login = joi.object({
Email : joi.string().email().required(),
Password : joi.string().min(4).required()
});


const product = joi.object({
    Page: joi.number().required(),
    Sort: joi.string(),
    Filter: joi.allow()
});

module.exports = {
    login,
    product
};