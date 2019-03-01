import { connect } from "react-redux";
import { LoginComponent } from "./LoginComponent";
import { loginPromise } from "src/redux/actions/authActions";
import { RootState } from "../../redux/reducers/reducers";
import { StaticProps, MethodProps } from '../login/LoginComponent';
import { getAccountPromise } from 'src/redux/actions/accountActions';

const mapStateToProps = ({account}: RootState): StaticProps => ({
    account: !!account.account,
});

const mapDispatchToProps: MethodProps = {
    loginPromise,
    getAccountPromise
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginComponent);
