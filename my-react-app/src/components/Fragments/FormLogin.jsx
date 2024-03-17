import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = (props) => {
  const { htmlfor, children } = props;
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    const data = { username:username, password:password };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href = "/products";
      } else {
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        name="username"
        title="Username"
        type="text"
        placeholder="Jhon doe"
        ref={usernameRef}
      />
      <InputForm
        name="password"
        title="Password"
        type="password"
        placeholder="*****"
      />
      <Button variant="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
          role="alert"
        >
          <span className="font-medium">{loginFailed}</span>
        </div>
      )}
    </form>
  );
};

export default FormLogin;
