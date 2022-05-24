const { studentLogin } = require("../controllers/student-controller");
const { update, create, delete_data, read, readAll } = require("../controllers/student-controller");
const { authFunc } = require("../utilities/auth");
const { Studentval, Studentlog, updateValidation, readValidation, deleteValidation } = require("../utilities/middleware");

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.send("Routing done");
  });
  app.get("/readall",authFunc, readAll);
  app.post("/create", Studentval, create);
  app.put("/update/:ID-:NAME",authFunc, updateValidation, update);
  app.delete("/delete/:ID",authFunc, deleteValidation, delete_data);
  app.get("/read",authFunc, readValidation, read)
  app.get("/login", studentLogin)
};