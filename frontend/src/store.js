import {createStore, combineReducers} from 'redux';
import {taskListReducer} from './reducers/taskReducers';


const initialState = {};

const reducer = combineReducers({
    taskList: taskListReducer,
})

const store = createStore(reducer, initialState, );

export default store;