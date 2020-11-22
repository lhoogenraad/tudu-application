"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdmin = exports.isAuth = exports.getToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getToken = (user) => {
    return _jsonwebtoken.default.sign({_id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin},
        config.default.JWT_SECRET,
        { expiresIn: '48h'})
};

exports.getToken = getToken;