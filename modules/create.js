const { connection } = require("../utilities/connection");
const create = (req, res) => {
  let { ID, NAME, DEPARTMENT, CGPA } = req.body;
  console.log(ID, NAME, DEPARTMENT, CGPA);
  connection.query(
    "INSERT INTO student VALUES (?, ?, ?,?)",
    [ID, NAMR, DEPARTMENT,CGPA],
    (err, result) => {
      if (err || result.length === 0) {
        res.status(400).json({
          success: err ? false : true,
          message: err
            ? err.message
            : `inserted ${result.affectedRows} records`,
          data: result,
        });
      }
      res.status(201).json({
        success: true,
        message: `inserted ${result.affectedRows} records`,
        data: result,
      });
    }
  );
};
module.exports = { create };








