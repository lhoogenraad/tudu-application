import express from 'express';
import data from './data';

const app = express();

app.get('/api/tasks', (req, res) => {
    res.send(data.tasks);
});

app.listen(5000, () => {console.log('backend server started on port 5000')});