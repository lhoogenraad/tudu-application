import Axios from 'axios';
import {TASK_CREATE_FAIL, TASK_CREATE_REQUEST, TASK_CREATE_SUCCESS, TASK_LIST_FAIL, TASK_LIST_REQUEST, TASK_LIST_SUCCESS, TASK_SELECT_FAIL, TASK_SELECT_REQUEST, TASK_SELECT_SUCCESS} from '../constants/taskConstants';

// Returns all tasks in data file
const listTasks = (userID) =>  async (dispatch) => {
    try{
        dispatch({type: TASK_LIST_REQUEST});
        const {data} = await Axios.get('/api/tasks/allbyuser?_id='+userID);
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



export {listTasks, getTask, createTask};