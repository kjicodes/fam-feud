const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feudSchema = new Schema(
  {
    content: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Feud", feudSchema);
