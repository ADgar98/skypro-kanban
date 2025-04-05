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
} from "./StyledAuthForm";

export const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();
   const handleLogin = (e) => {
      e.preventDefault();
      setIsAuth(true);
      navigate("/");
   };
  return (
    <SAuthFormConteiner>
      <SModalSignIn>
        <SModalBlock>
          <SModalHeader>
            <h2>{isSignUp ? "Регестрация" : "Вход"}</h2>
          </SModalHeader>
          <SModalFormLogin id="formLogIn" action="#">
            {isSignUp && (
              <SModalInput
                type="text"
                name="Name"
                id="formName"
                placeholder="Имя"
              />
            )}
            <SModalInput
              type="text"
              name="login"
              id="formlogin"
              placeholder="Эл. почта"
            />
            <SModalInput
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <SModalBtnEnter onClick={handleLogin} id="btnEnter">
              <p to={"/"}>{isSignUp ? "Регестрация" : "Войти"} </p>
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
