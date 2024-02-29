const mongoosePaginate = require('mongoose-paginate');

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

userSchema.plugin(mongoosePaginate);

const User = mongoose.model('User', userSchema);