const uri = "http://localhost:8000/api";

export default {
    posts: `${uri}/posts/`,
    post: (id: string) => `${uri}/posts/${id}/`,
    categories: `${uri}/categories/`,
    register: `${uri}/auth/register/`,
    account: `${uri}/auth/user/`,
    login: `${uri}/auth/login`,
    logout: `${uri}/auth/logout/`,
};
