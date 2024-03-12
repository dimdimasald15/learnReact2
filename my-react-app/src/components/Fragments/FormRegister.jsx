import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = (props) => {
    const { htmlfor, children } = props;
  
    return (
        <form action="">
        <InputForm
          name="fullname"
          title="Fullname"
          type="text"
          placeholder="insert your name here..."
        />
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
        <InputForm
          name="confirmPassword"
          title="Confirm Password"
          type="password"
          placeholder="*****"
        />
        <Button variant="bg-blue-600 w-full">Register</Button>
      </form>
    );
  };
  
  export default FormRegister;
  