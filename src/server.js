"use strict";

//
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
//

// home (get /)
app.get("/", (req, res) => {
  res.status(200).send(`Hello `);
});

// listen
// function start(port) {
//   app.listen(port, () => console.log(`server listen at port : ${port}`));
// }

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`server listen at port : ${port}`));
  },
};
