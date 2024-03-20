import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/totalPriceContext";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const { total } = useTotalPrice();
    const cart = useSelector((state) => state.cart.data);
    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        }, 0);
        setTotalCart(sum);
    }, [cart]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        location.href = "/login";
    };

    return (
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            <a href="/profile">{username}</a>
            <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
                item: {totalCart} | price: ${total.toLocaleString("id-ID")}
            </div>
            <Button
                variant={`bg-blue-600 ml-5 text-white hover:bg-blue-600 rounded-lg text-sm`}
                isDarkBtn="dark:bg-slate-900 dark:hover:bg-slate-900"
                onClick={() => setIsDarkMode(!isDarkMode)}
            >
                {isDarkMode ?
                    (
                        <svg id="theme-toggle-light-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    ) : (
                        <svg id="theme-toggle-dark-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                    )}
            </Button>
            <Button variant="ml-5 bg-black" onClick={handleLogout}>
                Logout
            </Button>
        </div>
    );
};

export default Navbar;
