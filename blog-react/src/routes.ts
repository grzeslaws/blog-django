export default {
    main: `/`,
    post: `/post/:id`,
    addPost: `/auth/addPost`,
    postTemplate: (id: string) => `/post/${id}`,
    register: `/register`,
    login: `/login`,
    auth: `/auth`,
};
