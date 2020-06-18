const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// Design Schema 
// String is shorthand for {type: String}
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    photo: { type: String, default: 'No picture.png' },
    location: { 
        lat: Number,
        lgn: Number },
  },
  {
    timestamps: true, 
    collection: "shops",
  }
);

const shop = mongoose.model("Shop", schema);

module.exports = shop;

// Option timestamps ไม่ต้องใส่ createdAt และ updatedAt จะเพิ่ม timestamps Auto