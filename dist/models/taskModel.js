"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _assert = require("assert");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const taskSchema = new mongoose.Schema({
    name: {type: String, require: true},
    // Could potentially make description required
    description: {type: String, require: false},
    dateCreated: {type: Date, require: true},
    // Represents the ID of the user who created this task
    userID: {type: String, require: true},
    // Dictates whether task is ticked off or not.
    isCompleted: {type: Boolean, require: true},
});

const taskModel = mongoose.model('Task', taskSchema);

var _default = taskModel;
exports.default = _default;