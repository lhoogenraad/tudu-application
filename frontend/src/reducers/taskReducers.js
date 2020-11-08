import {
    TASK_LIST_FAIL,
    TASK_LIST_REQUEST,
    TASK_LIST_SUCCESS,
    TASK_SELECT_FAIL,
    TASK_SELECT_REQUEST,
    TASK_SELECT_SUCCESS,
    TASK_CREATE_FAIL,
    TASK_CREATE_SUCCESS,
    TASK_CREATE_REQUEST,
    TASK_DELETE_REQUEST,
    TASK_DELETE_SUCCESS,
    TASK_DELETE_FAIL
} from "../constants/taskConstants";


function taskListReducer(state = { tasks: [] }, action) {
    switch (action.type) {
        case TASK_LIST_REQUEST:
            return { loading: true };
        case TASK_LIST_SUCCESS:
            return { loading: false, tasks: action.payload };
        case TASK_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function taskSelectReducer(state = { task: {} }, action) {
    switch (action.type) {
        case TASK_SELECT_REQUEST:
            return { loading: true };
        case TASK_SELECT_SUCCESS:
            return { loading: false, task: action.payload };
        case TASK_SELECT_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function taskCreateReducer(state = {}, action) {
    switch (action.type) {
        case TASK_CREATE_REQUEST:
            return { loading: true };
        case TASK_CREATE_SUCCESS:
            return { loading: false, task: action.payload };
        case TASK_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

function taskDeleteReducer(state = {}, action) {
    switch (action.type) {
        case TASK_DELETE_REQUEST:
            return { loading: true };
        case TASK_DELETE_SUCCESS:
            return { loading: false, task: action.payload, success: true };
        case TASK_DELETE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export { taskListReducer, taskSelectReducer, taskCreateReducer, taskDeleteReducer };