import { Children } from "react";
import FormLogin from "../Fragments/FormLogin";

const AuthLayout = (props) => {
  const { children, title, subtitle } = props;
  return (
    <div className="flex justify-center bg-blue-300 min-h-screen items-center">
      <div className="w-full max-w-xs bg-white p-5 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="text-slate-500 mb-8">{subtitle}</p>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
