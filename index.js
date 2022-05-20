const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
require("./route")(app);
app.listen(port, () => {
  console.log("Listening on port " + port);
});