import { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";

const ProductsPage = () => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const username = useLogin();

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, []);

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        });
    });

    useEffect(() => {
        if (products.length > 0 && cart.length > 0) {
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        location.href = "/login";
    };

    const handleAddToCart = (id) => {
        if (cart.find((item) => item.id === id)) {
            setCart(
                cart.map((item) =>
                    item.id === id ? { ...item, qty: item.qty + 1 } : item
                )
            );
        } else {
            setCart([
                ...cart,
                {
                    id,
                    qty: 1,
                },
            ]);
        }
    };

    // Fungsu Use Ref: 1. digunakan untuk update data tanpa merubah tampilan, 2. untuk manipulasi DOM
    const totalPriceRef = useRef(null);
    useEffect(() => {
        if (cart.length > 0) {
            totalPriceRef.current.style.display = "table-row";
        } else {
            totalPriceRef.current.style.display = "none";
        }
    });

    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                <a href="/profile">{username}</a>
                <Button variant="ml-5 bg-black" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-4/6 flex flex-wrap">
                    {products.length > 0 &&
                        products.map((product) => (
                            <CardProduct key={product.id}>
                                <CardProduct.Header
                                    src={product.image}
                                    id={product.id}
                                />
                                <CardProduct.Body name={product.title} id={product.id}>
                                    {product.description}
                                </CardProduct.Body>
                                <CardProduct.Footer
                                    price={product.price}
                                    id={product.id}
                                    handleAddToCart={handleAddToCart}
                                />
                            </CardProduct>
                        ))}
                </div>
                <div className="w-1/3">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
                    <div className="relative rounded-xl overflow-auto">
                        <div className="shadow-sm overflow-hidden my-5">
                            <table className="text-left border border-black table-auto w-full text-sm">
                                <thead>
                                    <tr>
                                        <th className="border border-black font-bold p-2 text-center">
                                            Product
                                        </th>
                                        <th className="border border-black font-bold p-2 text-center">
                                            Price
                                        </th>
                                        <th className="border border-black font-bold p-2 text-center">
                                            Qty
                                        </th>
                                        <th className="border border-black font-bold p-2 text-center">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.length > 0 &&
                                        cart.map((item) => {
                                            const product = products.find(
                                                (product) => product.id === item.id
                                            );
                                            return (
                                                <tr key={item.id}>
                                                    <td className="border border-black font-medium p-1 text-left">
                                                        {product.title.substring(0, 30)}...
                                                    </td>
                                                    <td className="border border-black font-medium p-1 text-left">
                                                        ${product.price.toLocaleString("id-ID")}
                                                    </td>
                                                    <td className="border border-black font-medium p-1 text-center">
                                                        {item.qty}
                                                    </td>
                                                    <td className="border border-black font-medium p-1 text-right">
                                                        $
                                                        {(item.qty * product.price).toLocaleString("id-ID")}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    <tr ref={totalPriceRef}>
                                        <td
                                            className="border border-black font-medium p-1 text-center"
                                            colSpan={3}
                                        >
                                            <b>Total Price</b>
                                        </td>
                                        <td className="border border-black font-medium p-1 text-right">
                                            <b>${totalPrice.toLocaleString("id-ID")}</b>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="my-5 flex justify-center">
                <Counter></Counter>
            </div> */}
        </Fragment>
    );
};

export default ProductsPage;
