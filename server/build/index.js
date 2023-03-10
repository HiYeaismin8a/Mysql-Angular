const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const routesDirector = require("../director/routes");
const routsMovies = require("../movies/routes");

// This will be our application entry. We'll setup our server here.
const http = require("http");
// Set up the express app
const app = express();
// Log requests to the console.
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use("/", routesDirector);
app.use("/", routsMovies);

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get("/", (req, res) =>
  res.status(200).send({
    message: "Welcome to the port 8000. By Jazmin OchoaB",
  })
);

const port = parseInt(process.env.PORT, 10) || 8000;
app.set("port", port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;
