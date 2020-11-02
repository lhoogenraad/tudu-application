import Axios from 'axios';
import {TASK_LIST_REQUEST, TASK_LIST_SUCCESS} from '../constants/taskConstants';

const listTasks = () => (dispatch) => {
    try{
        dispatch({type: TASK_LIST_REQUEST});
        const {data} = await Axios.get('/api/tasks');
        dispatch({type: TASK_LIST_SUCCESS, payload: data});
    }catch(){

    }
}