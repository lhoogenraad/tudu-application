import {createStore, combineReducers} from 'redux';



const initialState = {};

const reducer = combineReducers({
    taskList: taskListReducer,
})

const store = createStore(reducer, initialState, );