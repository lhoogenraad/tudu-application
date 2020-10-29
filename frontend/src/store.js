import {createStore, combineReducers} from 'redux';
import {tasklistReducer} from '../src/reducers/tasklistReducer';


const initialState = {};

const reducer = combineReducers({
    tasklist: tasklistReducer,

})

const store = createStore()