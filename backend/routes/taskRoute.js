import express from 'express';
import Task from '../models/taskModel';
import data from '../data';

const router = express();

router.get('/all', (req, res) => {
    //console.log('/api/tasks/ invoked at ' + Date.now());
    res.send(data.tasks);
});

router.get('/:id', (req, res) => {
    //console.log('/api/tasks/:id invoked at ' + Date.now());
    const returntask = data.tasks.find(x => x.id === req.params.id);
    if(returntask){
        res.send(returntask);
    }else{
        res.status(404).send({msg: "Task not found."});
    }
});

// Returns all tasks that have field userId === userID
router.get('/allbyuser/:userID', (req, res) => {
    res.status(500).send({msg: 'Not implemented yet'});
})

export default router;