import Axios from 'axios';
import {TASK_LIST_FAIL, TASK_LIST_REQUEST, TASK_LIST_SUCCESS} from '../constants/taskConstants';

const listTasks = () =>  async (dispatch) => {
    try{
        dispatch({type: TASK_LIST_REQUEST});
        const {data} = await Axios.get('/api/tasks');
        dispatch({type: TASK_LIST_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: TASK_LIST_FAIL, payload: error.message});
    }
}

export {listTasks};