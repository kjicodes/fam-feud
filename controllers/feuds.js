const Feud = require("../models/feud");

module.exports = {
  index: index,
  // show,
  // new: newFeud,
  create,
  delete: deleteFeud,
  // edit,
  update,
};

async function index(req, res) {
  Post.find({}, function (err, feud) {
    if (err) {
      res.status(500).json(err);
    }
    res.json(posts).status(200);
  });
}

async function create(req, res) {
  Post.create(req.body, function (err, feud) {
    res.status(200).json("ok");
  });
}

async function deleteFeud(req, res) {
  Post.delete(req.params.id, function (err, feud) {
    res.status(200).json("ok");
  });
}

async function update(req, res) {
  Post.update(req.params.id, req.body, function (err, feud) {
    res.status(200).json("ok");
  });
}
