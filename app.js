const express = require("express"),
  bodyParser = require("body-parser"),
  path = require("path");

const app = express();
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/services.routes")(app);

app.use("/", express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

module.exports = app;
