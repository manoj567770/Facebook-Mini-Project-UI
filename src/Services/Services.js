const BASE_URL = "http://localhost:8081";

export const getLoginApiUrl = () => {
  return `${BASE_URL}/auth/signin`;
};

export const getSignupApiUrl = () => {
  return `${BASE_URL}/auth/signup`;
};

export const getCreateBlogApiUrl = () => {
  return `${BASE_URL}/blogs`;
};

export const getBlogsApiUrl = () => {
  return `${BASE_URL}/blogs`;
};
