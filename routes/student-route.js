const { studentLogin } = require("../controllers/student-controller");
const { update, create, delete_data, read, readAll } = require("../controllers/student-controller");
const { Studentval, Studentlog } = require("../utilities/middleware");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.send("Routing done");
  });
  app.get("/readall", readAll);
  app.post("/create", Studentval, create);
  app.put("/update/:ID-:NAME", update);
  app.delete("/delete/:id", delete_data);
  app.get("/read", read)
  app.get("/login", Studentlog, studentLogin)
};