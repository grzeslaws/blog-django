import * as React from "react";
import { Redirect } from 'react-router-dom';
import { Login } from 'src/models/loginModel';

interface State {
    username: string;
    password: string;
}

export interface StaticProps {
    account: boolean;
}

export interface MethodProps {
    loginPromise: (payload: Login) => any;
    getAccountPromise: () => any;
}

export class LoginComponent extends React.Component<StaticProps & MethodProps, State> {
    public static readonly state = {
        username: "",
        password: "",
    };
    public render() {
        return (
            <React.Fragment>
                {this.props.account && <Redirect to="/auth" />}
                <div>
                    <label>name: </label>
                    <input onChange={this.onChange} name="username" />
                </div>
                <div>
                    <label>pass: </label>
                    <input onChange={this.onChange} name="password" />
                </div>
                <div>
                    <button onClick={this.register}>Register</button>
                </div>
            </React.Fragment>
        );
    }

    private register = (e: React.MouseEvent<HTMLButtonElement>) => {
        const payload = new Login(this.state.username, this.state.password);
        this.props.loginPromise(payload);
    };

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    };
}
