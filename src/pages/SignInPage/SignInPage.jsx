import { AuthForm } from "../../components/AuthForm/AuthForm";

export const SignInPage = ({setNewToken }) => {
  return <AuthForm isSignUp = {false} setNewToken={setNewToken}/>;
};
