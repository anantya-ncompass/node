const { create } = require("./modules/create");
const { delete_data } = require("./modules/delete");
const { read } = require("./modules/read");
const { readAll } = require("./modules/readAll");
const { update } = require("./modules/update");
module.exports = function (app) {
  app.get("/", (req, res) => {
    res.send("Routing done");
  });
  app.get("/readall", readAll);
  app.post("/create", create);
  app.put("/update/:ID-:NAME", update);
  app.delete("/delete/:id", delete_data);
  app.get("/read", read);
};