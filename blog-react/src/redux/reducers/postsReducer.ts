import { Posts } from "src/models/postsModel";
import { ActionType, getType } from "typesafe-actions";

import * as posts from "../actions/postsActions";
import { combineReducers } from "redux";
import { Post } from "src/models/postModel";

export type PostAction = ActionType<typeof posts>;

export type PostsState = Readonly<{
    posts: Posts | null;
    post: Post | null;
}>;

export const postsReducer = combineReducers<PostsState, PostAction>({
    posts: (state = null, action) => {
        switch (action.type) {
            case getType(posts.getPosts.success):
                return action.payload;
            default:
                return state;
        }
    },
    post: (state = null, action) => {
        switch (action.type) {
            case getType(posts.getPost.success):
                return action.payload;
            default:
                return state;
        }
    },
});
