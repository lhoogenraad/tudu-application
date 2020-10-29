import {
    TASK_LIST_SUCCESS,
    TASK_LIST_REQUEST,
    TASK_LIST_ERROR
} from '../constants/taskConstants';


function tasklistReducer(state = {tasklist: []}, action){
    switch(action.type){
        case TASK_LIST_REQUEST:
            return {loading: true};
        case TASK_LIST_SUCCESS:
            return {loading: false, tasklist: action.payload};
        case TASK_LIST_ERROR:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export {tasklistReducer};