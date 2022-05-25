const { CustomerLogin, CustomerDetails, ProductDetials } = require("../controllers/customer-controller");
const { authFunc } = require("../utilities/auth");
const { productval, logval } = require("../utilities/middleware");


module.exports = function (app) {
    app.get("/", (req, res) => {
      res.send("Routing done");
    });
    
    app.post("/login",logval , CustomerLogin),
    app.get("/customer",authFunc, CustomerDetails ),
    app.get("/product",productval, ProductDetials )
  };