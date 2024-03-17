import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";

const FormLogin = (props) => {
  const { htmlfor, children } = props;
  const handleLogin = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    window.location.href = "/products";
  }

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus()
  }, [])

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="email"
        title="Email"
        type="text"
        placeholder="example@mail.com"
        ref={emailRef}
      />
      <InputForm
        name="password"
        title="Password"
        type="password"
        placeholder="*****"
      />
      <Button variant="bg-blue-600 w-full" type="submit">Login</Button>
    </form>
  );
};

export default FormLogin;
