import { useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";

const Button = (props) => {
  const {
    children = "...",
    variant = "bg-black",
    onClick = () => {},
    type = "button",
    isDarkBtn
  } = props;
  const { isDarkMode } = useContext(DarkMode);
  
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} ${isDarkMode && isDarkBtn} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
