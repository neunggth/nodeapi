const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// Design Schema
// String is shorthand for {type: String}
const Schema = new mongoose.Schema({
  name:  String, 
  address: {
      province: String
  },
},{
  collection: 'companies'
});
// Collection ต้องตรงกับ ใน mongodb เท่านั้น online_nodeapi.settings ถึงจะออก
// Create model sync collection companies ระวัง ชื่อใน mongo compass 
const company = mongoose.model('Company', Schema);

module.exports = company