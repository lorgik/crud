const data = require("../../sql3-data");

module.exports = listUsers = async (req, res) => {
  res.writeHead(200);
  res.end(JSON.stringify(await data.getUsers()));
};
