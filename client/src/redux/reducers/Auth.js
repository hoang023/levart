export const AuthReducer = (state, action) => {
  const {
    type,
    payload: { isAuthenticated, user, profile },
  } = action;

  switch (type) {
    case "SET_AUTH":
      return {
        ...state,
        authLoading: false,
        isAuthenticated,
        user,
        profile,
      };

    default:
      return state;
  }
};
