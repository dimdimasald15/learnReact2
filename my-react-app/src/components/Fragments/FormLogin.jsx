import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = (props) => {
    const { htmlfor, children } = props;
  
    return (
        <form action="">
        <InputForm
          name="email"
          title="Email"
          type="text"
          placeholder="example@mail.com"
        />
        <InputForm
          name="password"
          title="Password"
          type="password"
          placeholder="*****"
        />
        <Button variant="bg-blue-600 w-full">Login</Button>
      </form>
    );
  };
  
  export default FormLogin;
  