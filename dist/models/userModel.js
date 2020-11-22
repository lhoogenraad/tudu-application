"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _assert = require("assert");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Describes how a user's data will be saved to the DB
const userSchema = new _mongoose.default.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    isAdmin: {type: Boolean, require: true},
});

// Defines the name of the model as 'User', and uses the userSchema previously defined
const userModel = _mongoose.default.model('User', userSchema);

var _default = userModel;
exports.default = _default;