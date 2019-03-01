import * as React from "react";
import { Redirect } from "react-router-dom";
import routes from 'src/routes';

interface State {
    redirectTo: boolean;
}

export interface MethodProps {
    logoutPromise: () => any;
}

export class LogoutComponent extends React.Component<MethodProps , State> {
    public readonly state = {
        redirectTo: false,
    };

    public render() {
        return (
            <React.Fragment>
                {this.state.redirectTo && <Redirect to={routes.auth} />}
                <button onClick={this.logout}>Logout</button>
            </React.Fragment>
        );
    }

    private logout = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.props.logoutPromise();
        this.setState({ redirectTo: true });
    };
}
