import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {tasklistReducer} from '../src/reducers/tasklistReducer';
import thunk from 'redux-thunk';

const initialState = {};

const reducer = combineReducers({
    tasklist: tasklistReducer,

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;