import axios from 'axios';
const { TASK_LIST_REQUEST, TASK_LIST_SUCCESS, TASK_LIST_ERROR } = require("../constants/taskConstants");

const listTasks = () => async (dispatch) => {
    try {
        dispatch({ type: TASK_LIST_REQUEST });
        const { data } = await axios.get('/api/tasks');
        dispatch({ type: TASK_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: TASK_LIST_ERROR, payload: error.message });
    }
}

export {listTasks};