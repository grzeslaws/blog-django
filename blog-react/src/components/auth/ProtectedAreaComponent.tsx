import * as React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "src/routes";
import AddPostWrapper from "../posts/AddPostWrapper";
import PostListWrapper from "../posts/PostListWrapper";

export class ProtectedAreaComponent extends React.Component<{}, {}> {
    public render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path={routes.addPost} component={AddPostWrapper} />
                    <Route path={routes.auth} component={PostListWrapper} />
                </Switch>
            </React.Fragment>
        );
    }
}
