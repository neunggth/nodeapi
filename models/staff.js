const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// Design Schema 
// String is shorthand for {type: String}
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    salary: { type: Number },
    address: { type: String },
    created: { type: Date, default: Date.now },
  },
  {
    collection: "staffs",
  }
);
// Collection ต้องชื่อต้องตรงกับ ใน mongodb เท่านั้น online_nodeapi.staffs ถึงจะเจอ
// Create model sync collection companies ระวัง ชื่อใน mongo compass
const staff = mongoose.model("Staff", schema);

module.exports = staff;
