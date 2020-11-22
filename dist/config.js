"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = void 0;

var dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

dotenv.default.config();

var _default = {
    MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://tudu_admin_user:organisedrice123@cluster0.adkpp.mongodb.net/tudu?retryWrites=true&w=majority',
        JWT_SECRET: process.env.JWT_SECRET || 'secretkey'
}

exports.default = _default;