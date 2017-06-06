var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ScraperSchema = new Schema({

  title: {
    type: String,
  },
  shortLink: {
    type: String,
  }
});

var AS = mongoose.model("AS", ScraperSchema);
module.exports = AS;