import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { checkLs } from "../checkLs";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(checkLs());
  
  useEffect(() => {
    // А тут мы проверяем ЛС, когда приложение запускается
    try {
      const storedUser = localStorage.getItem("userInfo");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных из localStorage:", error);
    }
  }, []);

  // Обновляем данные о пользователе и сохраняем в лс
  const updateUserInfo = (userData) => {
    setUser(userData);
    if (userData) {
      localStorage.setItem("userInfo", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userInfo");
    }
  };

  const login = (loginData) => {
    updateUserInfo(loginData);
    return true;
  };

  const logout = () => {
    updateUserInfo(null);
    return true;
  };
  return (
    <AuthContext.Provider value={{ user, login, logout, updateUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
