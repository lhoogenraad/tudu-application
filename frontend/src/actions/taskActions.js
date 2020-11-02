import Axios from 'axios';
import {TASK_LIST_FAIL, TASK_LIST_REQUEST, TASK_LIST_SUCCESS} from '../constants/taskConstants';

// Returns all tasks in data file
const listTasks = () =>  async (dispatch) => {
    try{
        dispatch({type: TASK_LIST_REQUEST});
        const {data} = await Axios.get('/api/tasks');
        dispatch({type: TASK_LIST_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: TASK_LIST_FAIL, payload: error.message});
    }
}

// Returns specified task (specified by id field)
const getTask = (taskID) => async (dispatch) => {
    try{
        dispatch({type: TASK_SELECT_REQUEST, payload: taskID});
        const {data} = await Axios.get('/api/tasks/' + taskID);
        dispatch({type: TASK_SELECT_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: TASK_SELECT_FAIL, payload: error.message});
    }
}

export {listTasks, getTask};