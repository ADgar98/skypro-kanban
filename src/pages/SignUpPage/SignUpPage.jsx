import { AuthForm } from "../../components/AuthForm/AuthForm";

export const SignUpPage = ({setNewToken}) => {
  return <AuthForm isSignUp setNewToken={setNewToken}/>;
};