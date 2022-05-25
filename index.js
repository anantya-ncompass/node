require("dotenv").config();
const express = require("express");
const { errorHandler } = require("./utilities/err-middleware");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./routes/customer-route")(app);
app.use(errorHandler)
app.listen(process.env.port, () => {
  console.log("Listening on port " + process.env.port);
});