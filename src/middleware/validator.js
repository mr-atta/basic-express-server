"use strict";

module.exports = (req, res, next) => {
  req.name = req.query.name;
  const nameParson = req.name;

  if (nameParson.length == 0) {
    //
    next("we dont find the name");
  } else {
    //
    next();
  }
};
