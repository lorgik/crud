const data = require("../../sql3-data");

module.exports = createUser = (req, res) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    const user = JSON.parse(body);
    user.age = parseInt(user.age);

    if (user.name && user.age) {
      res.writeHead(201);
      res.end(JSON.stringify(await data.addUser(user)));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: "Name and age are required" }));
    }
  });
};
