const jwt = require("jsonwebtoken");
const CustomError = require("./custom-err");
const getToken = (payload, secret) => {
  return jwt.sign(payload, secret);
};
const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};


const authFunc = (req, res, next) => {
  let token;
  try {
    let authHeader = req.headers["authorization"];
    if (authHeader.startsWith("Bearer ")) {
      token = authHeader.substring(7, authHeader.length);
    } else {
      token = authHeader;
    }
    let val = verifyToken(token, process.env.PRIVATE_KEY);
    console.log(val);
    if (val == undefined || val == "") {
      return;
    }
    next();
  } catch (error) {
    res.status(401);
    next(CustomError.badRequest("Authorization Failed"));
    return;
  }
  if (!token) {
    res.status(401);
    next(CustomError.badRequest("Authorization Failed, no token"));
    return;
  }
};










module.exports = {getToken, verifyToken, authFunc};