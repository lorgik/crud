const url = require("url");

const listUsers = require("./listUsers.js");
const createUser = require("./createUser.js");
const getUser = require("./getUser.js");
const updateUser = require("./updateUser.js");
const deleteUser = require("./deleteUser.js");

module.exports = userRoutes = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const path = parsedUrl.pathname;

  res.setHeader("Content-type", "application/json");

  if (path === "/users" && method === "GET") {
    listUsers(req, res);
  } else if (path === "/users" && method === "POST") {
    createUser(req, res);
  } else if (path.startsWith("/users/") && method === "GET") {
    getUser(req, res);
  } else if (path.startsWith("/users/") && method === "PUT") {
    updateUser(req, res);
  } else if (path.startsWith("/users/") && method === "DELETE") {
    deleteUser(req, res);
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};
