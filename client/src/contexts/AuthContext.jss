import { React, createContext, useEffect, useReducer } from "react";
import * as api from "../api";
import { messageSuccess } from "@/components/General/Message";
import { AuthReducer } from "../redux/reducers/Auth";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
    profile: null,
  });

  // Authenticate user
  const loadUser = async () => {
    if (localStorage["Auth_Token"]) {
      api.setAuthToken(localStorage["Auth_Token"]);
    }

    try {
      const response = await api.verifyAuthToken();
      // console.log("response", response);
      if (response.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: {
            isAuthenticated: true,
            user: response.data.user,
            profile: response.data.profile,
          },
        });
      }
    } catch (error) {
      localStorage.removeItem("Auth_Token");
      api.setAuthToken(null);
      dispatch({
        type: "SET_AUTH",
        payload: {
          isAuthenticated: false,
          user: null,
          profile: null,
        },
      });
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  // Login
  const loginUser = async (userForm) => {
    try {
      const response = await api.loginUser(userForm);
      if (response.data.success) {
        // console.log("Alibaba");
        localStorage.setItem("Auth_Token", response.data.accessToken);
      }

      await loadUser();
      messageSuccess("Login successful!");
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Register
  const registerUser = async (userForm, profileForm) => {
    try {
      const response = await api.registerUser(userForm, profileForm);

      if (response.data.success)
        localStorage.setItem("Auth_Token", response.data.accessToken);

      await loadUser();
      messageSuccess("Register successful!");

      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };

  // Logout
  const logoutUser = () => {
    localStorage.removeItem("Auth_Token");
    dispatch({
      type: "SET_AUTH",
      payload: {
        isAuthenticated: false,
        user: null,
        profile: null,
      },
    });
  };

  // Context data
  const authContextData = {
    loginUser,
    registerUser,
    logoutUser,
    authState,
  };

  // Return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
