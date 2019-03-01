import * as React from "react";
import { PostPayload } from "src/models/postPayloadModel";
import { Posts } from "src/models/postsModel";

export interface StaticProps {
    posts: Posts | null;
}

export interface MethodProps {
    addPostPromise: (payloads: PostPayload) => any;
    fetchPostsPromise: () => any;
}

interface State {
    title: string;
    text: string;
}

export class AddPostComponent extends React.Component<StaticProps & MethodProps, State> {
    public readonly state = {
        title: "",
        text: "",
    };

    public componentWillMount() {
        this.props.fetchPostsPromise()
    }

    public render() {
        return (
            <React.Fragment>
                {this.renderPostList()}
                <input onChange={this.onChange} name="title" placeholder="title" />
                <br />
                <input onChange={this.onChange} name="text" placeholder="text" />
                <br />
                <button onClick={this.addPost}>Add post</button>
            </React.Fragment>
        );
    }

    private renderPostList = (): JSX.Element[] | null => {
        const postList = this.props.posts
            ? this.props.posts.results.map(p => {
                  return (
                      <React.Fragment key={p.id}>
                          <div>{p.title}</div>
                      </React.Fragment>
                  );
              })
            : null;

        return postList;
    };

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    };
    private addPost = (e: React.MouseEvent<HTMLButtonElement>) => {
        const payload = new PostPayload(this.state.title, this.state.text);
        this.props.addPostPromise(payload);
    };
}
