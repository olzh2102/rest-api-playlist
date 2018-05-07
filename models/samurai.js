const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create samurai Schema and Model
const SamuraiSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  rank: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }

  // add in geo location 

});

const Samurai = mongoose.model('samurai', SamuraiSchema);

module.exports = Samurai;