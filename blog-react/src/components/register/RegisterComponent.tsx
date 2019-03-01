import * as React from "react";
import { Register } from "src/models/registerModel";
import { Redirect } from 'react-router-dom';

interface State {
    username: string;
    email: string;
    password: string;
}

export interface StaticProps {
    account: boolean;
}

export interface MethodProps {
    registerPromise: (payload: Register) => any;
}

export class RegisterComponent extends React.Component<StaticProps & MethodProps, State> {
    public static readonly state = {
        username: "",
        email: "",
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
                    <label>email: </label>
                    <input onChange={this.onChange} name="email" />
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
        const payload = new Register(this.state.username, this.state.email, this.state.password);
        this.props.registerPromise(payload);
    };

    private onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    };
}
