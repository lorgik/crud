const data = require("../../sql3-data");

module.exports = deleteUser = async (req, res) => {
  const id = parseInt(req.url.split("/")[2]);

  if (await data.deleteUser(id)) {
    res.writeHead(204);
    res.end();
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "User not found" }));
  }
};
