import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import taskRoute from './routes/taskRoute';
import bodyParser from 'body-parser';

/* This code is for initialising a connection to the mongodb database */
dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).catch(error => console.log('Error connecting to database: ' + error.message));


/* This code is for setting up the express server to handle requests (on port 5000) */

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoute);
app.use('/api/tasks', taskRoute);

app.listen(5000, () => {console.log('backend server started on port 5000')});