import AuthLayouts from "../Components/Layouts/AuthLayouts";
import FormRegister from "../Components/Fragments/FormRegister";

const RegisterPage = () => {
  return <AuthLayouts title="Register">{<FormRegister />}</AuthLayouts>;
};
export default RegisterPage;
