const data = require("../../sql3-data");

module.exports = updateUser = (req, res) => {
  const id = parseInt(req.url.split("/")[2]);
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    const updatedData = JSON.parse(body);
    const user = await data.updateUser(id, updatedData);

    if (user) {
      res.writeHead(200);
      res.end(JSON.stringify(user));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: "User not found" }));
    }
  });
};
