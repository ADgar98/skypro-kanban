import { Link, useNavigate } from "react-router-dom";
import {
  SAuthFormConteiner,
  SModalBlock,
  SModalBtnEnter,
  SModalFormGroup,
  SModalFormLogin,
  SModalHeader,
  SModalInput,
  SModalSignIn,
  StyledP,
} from "./StyledAuthForm";
import { useState } from "react";
import { signIn, signUp } from "../../services/auth";


export const AuthForm = ({ isSignUp, setIsAuth, setNewToken }) => {
  

 
  const navigate = useNavigate();
   
   const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
 });

 const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
 });

 const [error, setError] = useState("");

 const validateForm = () => {
  const newErrors = { name: "", login: "", password: "" };
  let isValid = true;

  if (isSignUp && !formData.name.trim()) {
     newErrors.name = true;
     setError("Заполните все поля");
     isValid = false;
  }

  if (!formData.login.trim()) {
     newErrors.login = true;
     setError("Заполните все поля");
     isValid = false;
  }

  if (!formData.password.trim()) {
     newErrors.password = true;
     setError("Заполните все поля");
     isValid = false;
  }

  setErrors(newErrors);
  return isValid;
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
     ...formData,
     [name]: value,
  });
  setErrors({ ...errors, [name]: false });
  setError("");
};

// функция отправки формы
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) {
     // если у нас форма не прошла валидацию, то дальше не продолжаем
     return;
  }
try { 
  // чтобы не писать две разных функции, выберем нужный запрос через 
  // тернарный оператор
  const data = !isSignUp
     ? await signIn({ login: formData.login, password: formData.password })
     : await signUp(formData);

  if (data) {
     setIsAuth(true);
     localStorage.setItem("userInfo", JSON.stringify(data));
     navigate("/");
     setNewToken(data.token)
  }
  } catch (err) {
     setError(err.message);
  }
};

  return (
    <SAuthFormConteiner>
      <SModalSignIn>
        <SModalBlock>
          <SModalHeader>
            <h2>{isSignUp ? "Регестрация" : "Вход"}</h2>
          </SModalHeader>
          <SModalFormLogin id="formLogIn" onSubmit={handleSubmit} action="#">
            {isSignUp && (
              <SModalInput
             
              type="text"
              name="name"
              id="formname"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
              />
            )}
            <SModalInput
              
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
              value={formData.login}
              onChange={handleChange}
            />
            <SModalInput
              
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
            />
            <StyledP>{error}</StyledP>
            <SModalBtnEnter onClick={handleSubmit} id="btnEnter">
              <p>{isSignUp ? "Регестрация" : "Войти"} </p>
            </SModalBtnEnter>
            <SModalFormGroup>
              <p>
                {isSignUp ? "Уже есть аккаунт? " : "Нужно зарегистрироваться?"}
              </p>
              {isSignUp ? (
                <Link to="/signIn">Войдите здесь</Link>
              ) : (
                <Link to="/signUp">Регистрируйтесь здесь</Link>
              )}
            </SModalFormGroup>
          </SModalFormLogin>
        </SModalBlock>
      </SModalSignIn>
    </SAuthFormConteiner>
  );
};
