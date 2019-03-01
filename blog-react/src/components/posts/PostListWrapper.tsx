import { fetchPostsPromise, fetchPostPromise } from "../../redux/actions/postsActions";
import { connect } from "react-redux";
import { RootState } from "../../redux/reducers/reducers";
import { fetchCategoriesPromise } from "../../redux/actions/categoriesActions";
import { PostListComponent, StaticProps, MethodProps } from "./PostListComponent";

const mapStateToProps = ({posts}: RootState): StaticProps => ({
    posts: posts.posts ? posts.posts : null,
    post: posts.post ? posts.post : null
});

const mapDispatchToProps: MethodProps = {
    fetchPostPromise,
    fetchPostsPromise,
    fetchCategoriesPromise,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { pure: false },
)(PostListComponent);
