import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { checkLs } from "../checkLs";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(checkLs());
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("userInfo");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setIsAuth(true);
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных из localStorage:", error);
    }
  }, []);

  const updateUserInfo = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem("userInfo", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userInfo");
    }
  };

  if (isAuth === null) {
    return <div>Loading...</div>;
  }

  const login = (loginData) => {
    updateUserInfo(loginData);
    return true;
  };

  const logout = () => {
    updateUserInfo(null);
    return true;
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        updateUserInfo,
        isAuth,
        setIsAuth,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
