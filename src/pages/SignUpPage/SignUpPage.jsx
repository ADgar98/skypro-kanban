import { AuthForm } from "../../components/AuthForm/AuthForm";

export const SignUpPage = ({setIsAuth, setNewToken}) => {
  return <AuthForm isSignUp setIsAuth={setIsAuth} setNewToken={setNewToken}/>;
};