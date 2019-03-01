import { connect } from "react-redux";
import { AuthComponent } from "./AuthComponent";
import { RootState } from "../../redux/reducers/reducers";
import { StaticProps, MethodProps } from "./AuthComponent";
import { getAccountPromise } from "src/redux/actions/accountActions";
import { RouteProps } from 'react-router-dom';

const mapStateToProps = ({ account }: RootState, routeProps: RouteProps): StaticProps => ({
    account: account.account,
    authInProgress: account.authInProgress,
    ...routeProps,
});

const mapDispatchToProps: MethodProps = {
    getAccountPromise,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthComponent);
