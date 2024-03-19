import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin"
import Button from "../Elements/Button"
import { useSelector } from "react-redux";

const Navbar = ()=>{
    const username = useLogin();
    const [ totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data)
    useEffect(()=>{
        const sum = cart.reduce((acc, item)=>{
            return acc + item.qty;
        }, 0)
        setTotalCart(sum)
    }, [cart])

    const handleLogout = () => {
        localStorage.removeItem("token");
        location.href = "/login";
    };

    return (
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                <a href="/profile">{username}</a>
                <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
                    {totalCart}
                </div>
                <Button variant="ml-5 bg-black" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
    )
}

export default Navbar