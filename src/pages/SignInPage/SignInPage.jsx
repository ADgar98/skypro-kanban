import { AuthForm } from "../../components/AuthForm/AuthForm";

export const SignInPage = ({setIsAuth, setNewToken }) => {
  return <AuthForm isSignUp = {false} setIsAuth={setIsAuth} setNewToken={setNewToken}/>;
};
