import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { isEmpty } from "lodash";

import App from "./App";
import AppContext from "./context";

const AxiosClient = () => {
  const baseUrl =
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? "http://localhost:8080/api"
      : "";

  const storeToken = localStorage.getItem('token')
  const [token, setToken] = useState(storeToken);
  const storeUser = localStorage.getItem('user')
  const [user, setUser] = useState(storeUser);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [sign, setSign] = useState(undefined);
  const navigate = useNavigate();

  const apiCall = ({ method, url, data, ...rest }) => axios({
    method,
    url: `${baseUrl}${url}`,
    data,
    headers: {
      authorization: !isEmpty(token) ? `Bearer ${token}` : null,
    },
    ...rest,
  }).catch((error) => {
    if (error.response.status === 401) {
      setToken(undefined);
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      throw error;
    } else {
      throw error
    }
  });

  const login = ({ username, password }) => apiCall({
    method: 'post',
    url: "/auth/login",
    auth: { username, password },
  })
    .then(processUserDetails)

  const processUserDetails = ({ data }) => {
    setToken(data.token)
    setUser(data.user.username)
    localStorage.setItem('token', data.token)
    localStorage.setItem('user', data.user.username)
  }

  const changePassword = (formValues) => apiCall({
    method: 'patch',
    url: '/auth/editPassword',
    data: formValues,
  })

  const logout = () => {
    setToken(undefined);
    setIsLoggedIn(false);
    navigate("/")
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const signup = (signupFormValues) => apiCall({
    method: 'post',
    url: '/auth/signup',
    data: signupFormValues,
  })

  const getSign = (id) => apiCall ({
    method:"get",
    url:`/signs/get/${id}`
  }).then(({data}) => setSign(data));

  const client = {
    apiCall,
    login,
    signup,
    logout,
    getSign,
    changePassword,
  };

  return (
    <AppContext.Provider
      value={{
        client,
        baseUrl,
        token,
        setToken,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        logout,
        sign,
        setSign
      }}
    >
      <App/>
    </AppContext.Provider>
  );
};

export default AxiosClient;
