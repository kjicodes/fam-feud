const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feudSchema = new Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model("Feud", feudSchema);
