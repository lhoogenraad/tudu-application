"use strict";

var express = _interopRequireDefault(require('express'));
var dotenv = _interopRequireDefault(require('dotenv'));
var config = _interopRequireDefault(require('../dist/config'));
var mongoose = _interopRequireDefault(require('mongoose'));
var userRoute = _interopRequireDefault(require('./routes/userRoute'));
var taskRoute = _interopRequireDefault(require('./routes/taskRoute'));
var bodyParser = _interopRequireDefault(require('body-parser'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* This code is for initialising a connection to the mongodb database */

const mongodbUrl = config.default.MONGODB_URL;

mongoose.default.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch(error => console.log('Error connecting to database: ' + error.message));


/* This code is for setting up the express server to handle requests (on port 5000) */

const app = (0, express.default)();

app.use(bodyParser.default.json());

app.use('/api/users', userRoute.default);
app.use('/api/tasks', taskRoute.default);

app.listen(5000, () => {console.log('backend server started on port 5000')});