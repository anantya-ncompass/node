const { CustomerLogin, CustomerDetails, ProductDetials } = require("../controllers/customer-controller");
const { authFunc } = require("../utilities/auth");

module.exports = function (app) {
    app.get("/", (req, res) => {
      res.send("Routing done");
    });
    
    app.get("/login", CustomerLogin),
    app.get("/customer",authFunc, CustomerDetails ),
    app.get("/product", ProductDetials )
  };