import reducers from '../reducers/reducers';
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";

const middleware =  applyMiddleware(thunk, createLogger());

export default createStore(reducers, middleware);