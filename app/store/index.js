import { createStore, applyMiddleware, combineReducers } from 'redux';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios';
import { composeWithDevTools } from 'redux-devtools-extension';
import campuses from './campuses';
import students from './students';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({campuses, students, form: formReducer});
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, loggingMiddleware)));
export * from './campuses';
export * from './students';