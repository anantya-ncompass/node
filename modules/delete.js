const { connection } = require("../utilities/connection");
const delete_data = (req, res) => {
  let id = req.params.id;
  connection.query(
    "DELETE FROM student WHERE ID = ?",
    [id],
    function (err, results, fields) {
      res.json(results);
    }
  );
  connection.commit();
};
module.exports = { delete_data };