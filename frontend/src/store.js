import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {taskListReducer} from './reducers/taskReducers';


const initialState = {};

const reducer = combineReducers({
    taskList: taskListReducer,
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;