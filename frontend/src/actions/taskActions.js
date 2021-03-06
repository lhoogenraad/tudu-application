import Axios from 'axios';
import {TASK_CREATE_FAIL, TASK_CREATE_REQUEST, TASK_CREATE_SUCCESS, TASK_DELETE_FAIL, TASK_DELETE_REQUEST, TASK_DELETE_SUCCESS, TASK_LIST_FAIL, TASK_LIST_REQUEST, TASK_LIST_SUCCESS, TASK_SELECT_FAIL, TASK_SELECT_REQUEST, TASK_SELECT_SUCCESS,
TASK_UPDATE_REQUEST, TASK_UPDATE_FAIL, TASK_UPDATE_SUCCESS} from '../constants/taskConstants';

// Returns all tasks in data file
const listTasks = (userID) =>  async (dispatch) => {
    try{
        dispatch({type: TASK_LIST_REQUEST});
        const {data} = await Axios.get('/api/tasks/allbyuser?userID='+userID);
        dispatch({type: TASK_LIST_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: TASK_LIST_FAIL, payload: error.message});
    }
}

// Returns specified task (specified by id field)
const getTask = (taskID) => async (dispatch) => {
    try{
        dispatch({type: TASK_SELECT_REQUEST, payload: taskID});
        const {data} = await Axios.get('/api/tasks/getbyid/' + taskID);
        dispatch({type: TASK_SELECT_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: TASK_SELECT_FAIL, payload: error.message});
    }
}

const createTask = (name, description, userID) => async (dispatch) => {
    dispatch({type: TASK_CREATE_REQUEST, payload: {name, description, userID}});
    try{
        const {data} = await Axios.post('/api/tasks/createtask', {name, description, userID});
        dispatch({type: TASK_CREATE_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: TASK_CREATE_FAIL, payload: error.message});
    }
}

const deleteTask = (taskID) => async (dispatch) => {
    try{
    dispatch({type: TASK_DELETE_REQUEST, payload: taskID});
    const {result} = await Axios.delete('/api/tasks/deletetask/' + taskID);
    dispatch({type: TASK_DELETE_SUCCESS, payload: result, success: true});
    }catch(error){
        dispatch({type: TASK_DELETE_FAIL, payload: error.message});
    }
}

/*
    This method sets a task's completed status to the boolean value of completedState
*/
const setTask = (taskID, completedState) => async (dispatch) => {
    try{
        dispatch({type: TASK_UPDATE_REQUEST, payload: {taskID, completedState}});
        const {result} = await Axios.put('/api/tasks/updatetask', {taskID, completedState});
        dispatch({type: TASK_UPDATE_SUCCESS, payload: result, success: true});
    }catch(error){
        dispatch({type: TASK_UPDATE_FAIL, payload: error.message});
    }
}

export {listTasks, getTask, createTask, deleteTask, setTask};