var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'test');

var Schema = mongoose.Schema;

var SeqSchema = new Schema({
  _id  : String,
  seq   :  Number
});

var SeqModel = db.model('count', SeqSchema);

module.exports = SeqModel;
