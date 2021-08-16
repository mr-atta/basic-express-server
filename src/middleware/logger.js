"use strict";

module.exports = (req, res, next) => {
  console.log("Request logger ::::", req.method, req.path);

  //
  next();
};
