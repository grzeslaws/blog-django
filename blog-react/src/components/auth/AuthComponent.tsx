import * as React from "react";
import { Account } from "src/models/accountModel";
import { RouteProps, Route, Redirect } from "react-router-dom";
import routes from "src/routes";

export interface StaticProps extends RouteProps {
    account: Account | null;
    authInProgress: boolean;
}

export interface MethodProps {
    getAccountPromise: () => any;
}

export class AuthComponent extends React.Component<StaticProps & MethodProps, {}> {
    public componentWillMount() {
        this.props.getAccountPromise();
    }
    public render() {
        const { account, component: Component, authInProgress } = this.props;
        const isAuth: boolean = !!account;
        if (authInProgress) {
            return null;
        }
        return <Route render={() => this.renderComponent(Component, isAuth)} />;
    }

    private renderComponent = (Component: any, isAuth: boolean) => (isAuth ? <Component {...this.props} /> : <Redirect to={routes.login} />);
}
