import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormLogin from "../Components/Fragments/FormLogin";

const LoginPage = () => {
  return <AuthLayouts title="Login">{<FormLogin />}</AuthLayouts>;
};

export default LoginPage;
