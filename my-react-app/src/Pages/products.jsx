import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
    return (
       <div className="flex justify-center py-5">
        <CardProduct> 
            <CardProduct.Header src="/images/shoes-1.jpg" alt="product" />
            <CardProduct.Body title="Sepatu Baru">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, repellat!
            </CardProduct.Body>
            <CardProduct.Footer price="Rp 1000.000" />
        </CardProduct>
        <CardProduct> 
            <CardProduct.Header src="/images/shoes-1.jpg" alt="product" />
            <CardProduct.Body title="Sepatu Baru">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, repellat!
            </CardProduct.Body>
            <CardProduct.Footer price="Rp 1000.000" />
        </CardProduct>
       </div>
    );
}

export default ProductsPage;