const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomCategorySchema = new Schema({
  roomCategoryName: {
    type: String,
    unique: true,
  },
  rooms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Room",
    },
  ],
});

module.exports = mongoose.model("roomCategory",roomCategorySchema);


