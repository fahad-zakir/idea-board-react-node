const mongoose = require("mongoose");
const Schema = require("../schema");

const Idea = mongoose.model("Idea", Schema.IdeaSchema);

module.exports = Idea;
