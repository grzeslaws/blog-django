import * as React from "react";
import { Post } from "../../models/postModel";
import { Link, RouteProps, Route } from "react-router-dom";
import routes from "src/routes";
import { Posts } from "src/models/postsModel";
import LogoutWrapper from "../logout/LogoutWrapper";
import AddPostWrapper from './AddPostWrapper';

export interface StaticProps {
    posts: Posts | null;
    post: Post | null;
}

export interface MethodProps {
    fetchPostsPromise: () => any;
    fetchPostPromise: (id: string) => any;
    fetchCategoriesPromise: () => any;
}

export class PostListComponent extends React.Component<StaticProps & MethodProps> {
    public componentWillMount() {
        this.props.fetchPostsPromise();
        this.props.fetchCategoriesPromise();
    }

    public render() {
        return (
            <div>
                
                <LogoutWrapper />
                {this.props.posts
                    ? this.props.posts.results.map((p: Post) => {
                          return (
                              <Link to={routes.postTemplate(p.id)} key={Math.random()}>
                                  {p.text}
                              </Link>
                          );
                      })
                    : null}
            </div>
        );
    }
}
