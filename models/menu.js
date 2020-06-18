const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Design Schema
// String is shorthand for {type: String}
// many to one
const schema = Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number },
    shop: { type: Schema.Types.ObjectId, ref: "Shop" },
  },
  {
    toJSON: { virtuals: true },
    timestamps: true,
    collection: "menus",
  }
);
schema.virtual("price_vat").get(function () {
  return this.price * 0.07 + this.price;
});
// Getter() Setters()
// var virtual = schema.virtual("fullname");
// virtual.get(function (value, virtual, doc) {
//   return this.name.first + " " + this.name.last;
// });

const menu = mongoose.model("Menu", schema);

module.exports = menu;

// Option timestamps ไม่ต้องใส่ createdAt และ updatedAt จะเพิ่ม timestamps Auto
