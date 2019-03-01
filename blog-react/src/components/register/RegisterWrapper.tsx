import { connect } from "react-redux";
import { RegisterComponent } from "./RegisterComponent";
import { registerPromise } from "src/redux/actions/registerActions";
import { RootState } from "../../redux/reducers/reducers";
import { StaticProps, MethodProps } from '../register/RegisterComponent';

const mapStateToProps = ({account}: RootState): StaticProps => ({
    account: !!account.account,
});

const mapDispatchToProps: MethodProps = {
    registerPromise
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RegisterComponent);
