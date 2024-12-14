import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        id="username"
        type="text"
        placeholder="Input Your Name here..."
      >
        Username
      </InputForm>
      <InputForm id="password" type="password" placeholder="********">
        Password
      </InputForm>
      <InputForm id="confirm-password" type="password" placeholder="********">
        Confirm Password
      </InputForm>
      <Button background="bg-blue-600 w-full">Register</Button>
    </form>
  );
};
export default FormRegister;
