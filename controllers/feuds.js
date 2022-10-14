const Feud = require("../models/Feud");

module.exports = {
  index,
  create,
};

function index(req, res) {
  Feud.find({}, function (err, feuds) {
    if (err) {
      res.status(500).json(err);
    }
    res.json(feuds).status(200);
  });
}

function create(req, res) {
  Feud.create(req.body, function (err, feud) {
    res.status(200).json("ok");
  });
}
