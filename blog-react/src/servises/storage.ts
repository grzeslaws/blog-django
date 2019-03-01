const TOKEN = "authBlogToken";
export const setTokenInLocalStorage = (value: string) => localStorage.setItem(TOKEN, value);
export const getTokenFromLocalStorage = () => localStorage.getItem(TOKEN);
export const removeTokenFromLocalStorage = () => localStorage.removeItem(TOKEN);
export const getHeadersAuthorization = () => (getTokenFromLocalStorage() ? `Token ${getTokenFromLocalStorage()}` : null);
