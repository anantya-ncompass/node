const jwt = require("jsonwebtoken");
const CustomError = require("./custom-err");
const getToken = (payload, secret) => {
  return jwt.sign(payload, secret);
};
const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};
/*console.log(getToken("hello", "anantya"));
console.log(
  verifyToken(
    "eyJhbGciOiJIUzI1NiJ9.aGVsbG8.__qI-4_HrRZTbPUjBxaSwIz_IFAMZqMSbUy8YQI0PxY",
    "anantya"
  )
);*/


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
    next(CustomError.badRequest("Not authorized"));
    return;
  }
  if (!token) {
    res.status(401);
    next(CustomError.badRequest("Not authorized, no token"));
    return;
  }
};










module.exports = {getToken, verifyToken, authFunc};