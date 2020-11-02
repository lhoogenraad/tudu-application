import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {taskListReducer} from './reducers/taskReducers';


const initialState = {};

const reducer = combineReducers({
    taskList: taskListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;