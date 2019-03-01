import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { StateType } from "typesafe-actions";
import { categoriesReducer } from "./categoriesReducer";
import { accountReducer } from './accountReducer';

const reducers = combineReducers({
    posts: postsReducer,
    categories: categoriesReducer,
    account: accountReducer,
});

export type RootState = StateType<typeof reducers>;

export default reducers;
