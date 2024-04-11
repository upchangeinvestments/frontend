import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = React.createContext();

var baseUrl, backendUrl;
if (process.env.REACT_APP_NODE_ENV === "dev") {
  baseUrl = process.env.REACT_APP_BASE_URL;
  backendUrl = process.env.REACT_APP_BACKEND_URL;
} else {
  baseUrl = process.env.REACT_APP_BASE_URL_PROD;
  backendUrl = process.env.REACT_APP_BACKEND_URL_PROD;
}

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const tokenExpiration = localStorage.getItem("tokenExpiration");

  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const contextValue = {
    isAuth,
    handleUpdateAuth,
    user,
    setUser,
    logout,
    baseUrl,
    backendUrl,
  };

  function handleUpdateAuth(value) {
    return setIsAuth(value);
  }
  function logout() {
    if (user.AccountId) {
      window.open(`${backendUrl}/auth/logout`, "_self");
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
      navigate("/");
    }
    setIsAuth(false);
    setUser({});
  }

  const handleVerify = async (token) => {
    try {
      const response = await axios.get(`${backendUrl}/auth/verify?token=${token}`);
      if (response.status === 200 && response.data.status === "success") {
        setIsAuth(true);
        setUser(response.data.user);
      }
    } catch (error) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
      setIsAuth(false);
      setUser({});
      navigate("/");
    }
  };

  const getUser = async () => {
    try {
      const url = `${backendUrl}/auth/provider/success`;
      const response = await axios.get(url, { withCredentials: true });
      setUser(response.data.user);
      setIsAuth(true);
    } catch (err) {
      setIsAuth(false);
      // navigate("/");
      setUser({});
    }
  };

  useEffect(() => {
    if (token) {
      if (tokenExpiration && new Date() > tokenExpiration) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
      } else {
        handleVerify(token);
      }
    } else {
      getUser();
    }
    // eslint-disable-next-line
  }, [token, tokenExpiration]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
