const jwt = require("jsonwebtoken");
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

module.exports = {getToken, verifyToken};