export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const getError = (state) => state.auth.error;

export const getToken = (state) => state.auth.token;
