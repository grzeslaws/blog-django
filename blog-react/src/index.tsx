import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { GlobalStyle } from "./theme/elements/Global";
import { themeProps, ThemeProvider } from "./theme";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import RegisterWrapper from "./components/register/RegisterWrapper";
import AuthWrapper from "./components/auth/AuthWrapper";
import LoginWrapper from "./components/login/LoginWrapper";
import routes from "./routes";
import PostListWrapper from "./components/posts/PostListWrapper";
import PostWrapper from "./components/posts/PostWrapper";
import AddPostWrapper from "./components/posts/AddPostWrapper";
import { ProtectedAreaComponent } from "./components/auth/ProtectedAreaComponent";

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle theme={themeProps} />
        <ThemeProvider theme={themeProps}>
            <Router>
                <React.Fragment>
                    <Route exact={true} path={routes.main} component={PostListWrapper} />
                    <Switch>
                        <Route path={routes.register} component={RegisterWrapper} />
                        <Route path={routes.post} component={PostWrapper} />
                        <Route path={routes.login} component={LoginWrapper} />
                        <AuthWrapper path={routes.auth} component={ProtectedAreaComponent} />
                    </Switch>
                </React.Fragment>
            </Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById("root") as HTMLElement,
);
