import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
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

app.get('/api/tasks', (req, res) => {
    //console.log('/api/tasks/ invoked at ' + Date.now());
    res.send(data.tasks);
});

app.get('/api/tasks/:id', (req, res) => {
    //console.log('/api/tasks/:id invoked at ' + Date.now());
    const returntask = data.tasks.find(x => x.id === req.params.id);
    if(returntask){
        res.send(returntask);
    }else{
        res.status(404).send({msg: "Task not found."});
    }
});

app.listen(5000, () => {console.log('backend server started on port 5000')});