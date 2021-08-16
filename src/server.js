"use strict";

//
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
//
const loggerModeule = require("./middleware/logger");
const handler404 = require("./error-handlers/404");
const handler500 = require("./error-handlers/500");
const testName = require("./middleware/validator");
//

app.use(loggerModeule);

// home (get /)
app.get("/", (req, res) => {
  res.status(200).send(`Hello `);
});

//use query string
app.get("/person", testName, (req, res) => {
  //http://localhost:3000/person?name=Ibrahim
  res.status(200).json({
    name: req.name,
  });
});

//
app.get("/bad", (req, res, next) => {
  next("error from (bad) end point");
});

app.use(handler500);

app.use("*", handler404);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`server listen at port : ${port}`));
  },
};
