import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {taskCreateReducer, taskDeleteReducer, taskListReducer, taskSelectReducer, taskUpdateReducer} from './reducers/taskReducers';
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers';
import Cookie from 'js-cookie';


const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {userSignin: {userInfo}};

const reducer = combineReducers({
    taskList: taskListReducer,
    taskSelect: taskSelectReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    taskCreate: taskCreateReducer,
    taskDelete: taskDeleteReducer,
    taskUpdate: taskUpdateReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;