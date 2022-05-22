const express = require("express");
const app = express();
const port = 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./routes/student-route")(app);
app.listen(port, () => {
  console.log("Listening on port " + port);
});