const { connection } = require("../utilities/connection");
const read = (req, res) => {
  let  { col_name } = req.body;
  console.log(col_name)
  connection.query(
    `SELECT ${col_name.replace(/['"]+/g, "")} FROM student;`,
    function (err, results, fields) {
      res.status(200).json(results);
    }
  );
};

module.exports = { read };