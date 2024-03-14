import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
    {
        id: 1,
        title: "Sepatu Satu",
        price: "Rp1000000",
        image: "/images/shoes-1.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, repellat!"
    },
    {
        id: 2,
        title: "Sepatu Dua",
        price: "Rp1200000",
        image: "/images/shoes-2.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        id: 3,
        title: "Sepatu Tiga",
        price: "Rp1300000",
        image: "/images/shoes-3.jpg",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. ksld KLKdaksdsakldk adiuadiuaso jdjskladb.!"
    },
    {
        id: 4,
        title: "Sepatu Empat",
        price: "Rp1400000",
        image: "/images/shoes-4.jpg",
        description: "Lorem, ipsum dolor. ksld KLKdaksdsakldk adiuadiuaso jdjskladb.!"
    },
];

const email = localStorage.getItem("email");
const handleLogout = ()=>{
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    location.href="/login";
}

const ProductsPage = () => {
    return (
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
                {email}
                <Button variant="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex justify-center py-5">
            {products.map((product) => (
                <CardProduct key={product.id}>
                    <CardProduct.Header src={product.image} alt={'product'+product.id} />
                    <CardProduct.Body name={product.name}>
                        {product.description}
                    </CardProduct.Body>
                    <CardProduct.Footer price={product.price} />
                </CardProduct>
            ))}
        </div>
        </Fragment>
    );
}

export default ProductsPage;