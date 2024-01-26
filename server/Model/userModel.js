const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, unique: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
