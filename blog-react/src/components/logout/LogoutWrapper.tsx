import { connect } from "react-redux";
import { LogoutComponent, MethodProps } from "./LogoutComponent";
import { logoutPromise } from "src/redux/actions/authActions";

const mapDispatchToProps: MethodProps = {
    logoutPromise,
};

export default connect(
    null,
    mapDispatchToProps,
)(LogoutComponent);
