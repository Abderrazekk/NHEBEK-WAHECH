const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    // Le champ phone est maintenant facultatif
    // required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;

