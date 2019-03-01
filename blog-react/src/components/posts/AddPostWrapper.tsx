import { addPostPromise, fetchPostsPromise } from "../../redux/actions/postsActions";
import { connect } from "react-redux";
import { RootState } from "../../redux/reducers/reducers";
import { AddPostComponent, StaticProps, MethodProps } from "./AddPostComponent";
import { match } from "react-router-dom";

const mapStateToProps = ({ posts }: RootState): StaticProps => ({
    posts: posts.posts ? posts.posts : null,
});

const mapDispatchToProps: MethodProps = {
    addPostPromise,
    fetchPostsPromise,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddPostComponent);
