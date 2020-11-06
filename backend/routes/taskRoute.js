import express from 'express';
import Task from '../models/taskModel';
import data from '../data';

const router = express();

router.get('/all', async (req, res) => {
    const tasks = await Task.find({});
    res.send(tasks);
});

router.get('/getbyid/:id', async (req, res) => {
    const task = await Task.findOne({_id: req.params.id});
    // If we found task, return it. If not, return 404
    if(task){
        res.send(task);
    }else{
        res.status(404).send({msg: 'Task not found'});
    }
});

// Returns all tasks that have field userId === userID
router.get('/allbyuser', async (req, res) => {
    const userID = req.query.userID
    ? {userID: req.query.userID} : {};
    const tasks = await Task.find({
        ...userID,
    });
    if (tasks) {
        res.send(tasks);
    } else {
        res.status(404).send({ msg: 'Task not found by user with id ' + userID });
    }
});

// Creates a new Task entity and sends it to the database
router.post('/createtask', async (req, res) => {
    // This field will be used to represent the date the task was created
    const date = new Date();
    const saveDate = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();

    const task = new Task({
        name: req.body.name,
        description: req.body.description,
        dateCreated: saveDate,
        userID: req.body.userID,
        // All new tasks are initially set to incompleted
        isCompleted: false,
    });
    const newTask = await task.save();
    if (newTask) {
        // Return successful http status 200 if newTask exists
        res.status(200).send({ msg: 'Task successfully created' });
    } else {
        res.status(401).send({ msg: 'Task not created' });
    }
})

export default router;