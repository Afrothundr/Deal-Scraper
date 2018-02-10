var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var DealSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  deal: {
    type: String,
    required: true
  },
  // price: {
  //   type: String,
  // },
  // code: {
  //   type: String
  // },
  // vendor: {
  //   type: String
  // },
  picture: {
    type: String,
    required: true
  },
  comment: {
    type: Schema.Types.ObjectId,
    ref: "userComment"
  }
});

var Deal = mongoose.model("Deal", DealSchema);

module.exports = Deal;