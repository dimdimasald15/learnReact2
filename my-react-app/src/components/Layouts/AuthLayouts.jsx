import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, subtitle, type } = props;
  return (
    <div className="flex justify-center bg-blue-300 min-h-screen items-center">
      <div className="w-full max-w-xs bg-white p-5 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="text-slate-500 mb-8">{subtitle}</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({type})=>{
  return (
    <p className="text-sm mt-5 text-center">
          {type === "login" ? "Don't have an account? Please " : "Already have an account? "}
          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">Register</Link>
          )}
          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">Login</Link>
          )}
        </p>
  );
}


export default AuthLayout;
