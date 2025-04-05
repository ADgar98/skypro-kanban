import { AuthForm } from "../../components/AuthForm/AuthForm";

export const SignInPage = ({setIsAuth}) => {
  return <AuthForm isSignUp = {false} setIsAuth={setIsAuth}/>;
};
