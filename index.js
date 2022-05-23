const express = require("express");
const { errorHandler } = require("./utilities/err-middleware");
const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./routes/student-route")(app);
app.use(errorHandler)
app.listen(port, () => {
  console.log("Listening on port " + port);
});