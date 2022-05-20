const { connection } = require("../utilities/connection");
const update = (req, res) => {
  let { ID, NAME } = req.params;
  connection.query(
    `update STUDENT set NAME = "${NAME}" where ID = "${ID}"`,
    (err, result) => {
      res.json({ message: "updated" });
    }
  );
  connection.commit();
};
module.exports = {
  update,
};