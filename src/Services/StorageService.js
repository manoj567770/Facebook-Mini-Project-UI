export const setUserToken = (token) => {
  if (token) {
    return localStorage.setItem("token", token);
  }
};

export const getUserToken = () => {
  return localStorage.getItem("token");
};

export const setUserData = (user) => {
  if (user) {
    return localStorage.setItem("user", JSON.stringify(user));
  }
};

export const getUserData = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const isLogin = () => {
  return getUserToken() ? true : false;
};
