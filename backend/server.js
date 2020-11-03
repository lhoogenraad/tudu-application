import express from 'express';
import data from './data';

const app = express();

app.get('/api/tasks', (req, res) => {
    console.log('/api/tasks/ invoked at ' + Date.now());
    res.send(data.tasks);
});

app.get('/api/tasks/:id', (req, res) => {
    console.log('/api/tasks/:id invoked at ' + Date.now());
    const returntask = data.tasks.find(x => x.id === req.params.id);
    if(returntask){
        res.send(returntask);
    }else{
        res.status(404).send({msg: "Task not found."});
    }
});

app.listen(5000, () => {console.log('backend server started on port 5000')});