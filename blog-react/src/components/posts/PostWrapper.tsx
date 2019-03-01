import { fetchPostPromise } from "../../redux/actions/postsActions";
import { connect } from "react-redux";
import { RootState } from "../../redux/reducers/reducers";
import { PostComponent, StaticProps, MethodProps } from "./PostComponent";
import { match, RouteComponentProps, withRouter } from "react-router-dom";

const mapStateToProps = ({ posts }: RootState, matchProps: { match: match<{ id: string }> }): StaticProps => ({
    post: posts.post ? posts.post : null,
    postId: matchProps.match.params.id,
});

const mapDispatchToProps: MethodProps = {
    fetchPostPromise,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { pure: false },
)(PostComponent);
