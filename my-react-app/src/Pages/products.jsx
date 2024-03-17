import { Fragment, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
    {
        id: 1,
        name: "Sepatu Satu",
        price: 1000000,
        image: "/images/shoes-1.jpg",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, repellat!",
    },
    {
        id: 2,
        name: "Sepatu Dua",
        price: 1200000,
        image: "/images/shoes-2.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 3,
        name: "Sepatu Tiga",
        price: 1300000,
        image: "/images/shoes-3.jpg",
        description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ksld KLKdaksdsakldk adiuadiuaso jdjskladb.!",
    },
    {
        id: 4,
        name: "Sepatu Empat",
        price: 1400000,
        image: "/images/shoes-4.jpg",
        description:
            "Lorem, ipsum dolor. ksld KLKdaksdsakldk adiuadiuaso jdjskladb.!",
    },
    // {
    //     id: 5,
    //     name: "Sepatu Lima",
    //     price: 1500000,
    //     image: "/images/shoes-5.jpg",
    //     description: "Lorem, ipsum dolor. ksld KLKdaksdsakldk adiuadiuaso jdjskladb.!"
    // },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            qty: 1,
        },
    ]);

    const handleLogout = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
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
            setCart([...cart, {
                id, qty: 1
            }])
        }
    };

    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button variant="ml-5 bg-black" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <div className="flex justify-center py-5">
                <div className="w-4/6 flex flex-wrap">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header
                                src={product.image}
                                alt={"product" + product.id}
                            />
                            <CardProduct.Body name={product.name}>
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
                    <table className="text-left table-auto border-separate border border-slate-400 border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find(
                                    (product) => product.id === item.id
                                );
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td>Rp{product.price.toLocaleString("id-ID")}</td>
                                        <td>{item.qty}</td>
                                        <td>
                                            Rp{(item.qty * product.price).toLocaleString("id-ID")}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
};

export default ProductsPage;
