import * as React from "react";
import { Post } from "../../models/postModel";
import { match } from "react-router";

export interface StaticProps {
    post: Post | null;
    postId: string;
}

export interface MethodProps {
    fetchPostPromise: (id: string) => any;
}

export class PostComponent extends React.Component<StaticProps & MethodProps> {
    public componentDidMount() {
        this.props.fetchPostPromise(this.props.postId);
    }

    public render() {
        return <div>Post: {this.props.post ? this.props.post.title : null}</div>;
    }
}
