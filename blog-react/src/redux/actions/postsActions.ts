import { createAsyncAction } from "typesafe-actions";
import { Post } from "src/models/postModel";
import { http } from "src/servises/http";
import { Dispatch } from "redux";
import endpoints from "src/endpoints";
import { parse } from "sparkson";
import { Posts } from "src/models/postsModel";
import { PostPayload } from 'src/models/postPayloadModel';

export const getPosts = createAsyncAction("request/POSTS", "get/POSTS", "failure/POSTS")<string, Posts, Error>();
export const fetchPostsPromise = () => {
    return (dispatch: Dispatch) => {
        http(endpoints.posts).then(json => {
            dispatch(getPosts.success(parse(Posts, json)));
        });
    };
};

export const getPost = createAsyncAction("request/POST", "get/POST", "failure/POST")<string, Post, Error>();
export const fetchPostPromise = (id: string) => {
    return (dispatch: Dispatch) => {
        http(endpoints.post(id)).then(json => dispatch(getPost.success(parse(Post, json))));
    };
};

export const addPostPromise = (payload: PostPayload) => {
    return (dispatch: Dispatch) => {
        http(endpoints.posts, payload).then(() => fetchPostsPromise());
    };
};
