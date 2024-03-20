import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, subtitle, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`flex justify-center bg-blue-300 min-h-screen items-center ${
        isDarkMode && `bg-slate-900`
      }`}
    >
      <button
        type="button"
        className={`absolute right-5 top-5 bg-blue-600 p-2 text-white hover:bg-blue-600 rounded-lg text-sm ${!isDarkMode && "dark:bg-slate-900 dark:hover:bg-slate-900"}`}
        onClick = {()=> setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? 
        (
          <svg id="theme-toggle-light-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
          ): (
          <svg id="theme-toggle-dark-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
        )}
      </button>

      <div
        className={`w-full max-w-xs bg-white ${
          isDarkMode && `bg-slate-800`
        } p-5 rounded-xl shadow`}
      >
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="text-slate-500 mb-8">{subtitle}</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  return (
    <p className="text-sm mt-5 text-center">
      {type === "login"
        ? "Don't have an account? Please "
        : "Already have an account? "}
      {type === "login" && (
        <Link to="/register" className="font-bold text-blue-600">
          Register
        </Link>
      )}
      {type === "register" && (
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      )}
    </p>
  );
};

export default AuthLayout;
