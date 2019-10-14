const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const memberSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password Should not contain word password");
      }
    }
  },
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const member = mongoose.model("Member", memberSchema);

module.exports = member;
