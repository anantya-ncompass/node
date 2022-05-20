const { connection } = require("../utilities/connection");
const readAll = (req, res) => {
  connection.query("SELECT * FROM student", function (err, results, fields) {
    res.json(results);
  });
};
module.exports = { readAll };