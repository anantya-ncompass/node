const { connection } = require("../utilities/connection");
const create = (req, res) => {
  //let [id, name, age, contact, cgpa] = req.body;
  connection.query("INSERT INTO student VALUES (?, ?, ?,?)", [
    16,
    "JOON",
    30,
    9.9,
  ]);
  res.send("Successfully Inserted");
};
module.exports = { create };