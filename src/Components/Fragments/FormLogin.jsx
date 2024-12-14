import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  return (
    <form action="">
      <InputForm id="email" type="email" placeholder="Example.com">
        Email
      </InputForm>
      <InputForm id="password" type="password" placeholder="********">
        Password
      </InputForm>
      <Button background="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
