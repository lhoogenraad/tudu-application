import express from 'express';
import data from './data';

const app = express();

app.get('/api/tasks', (req, res) => {
    res.send(data.tasks);
});

app.get('/api/tasks/:id', (req, res) => {
    const returntask = data.tasks.find(x => x.id === req.params.id);
    res.send(returntask);
    console.log('get ID invoked');
});

app.listen(5000, () => {console.log('backend server started on port 5000')});