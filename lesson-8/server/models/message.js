const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  author: {type: String, require: true},
  text: {type: String, require: true},
  timeStamp: {type: Date, default: new Date()},
});

module.exports = mongoose.model('Message', messageSchema);