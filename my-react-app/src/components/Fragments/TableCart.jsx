import { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/totalPriceContext";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode } = useContext(DarkMode);
  const dispatch = useTotalPriceDispatch();
  const {total} = useTotalPrice();

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      // setTotalPrice(sum);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  // Fungsi Use Ref: 1. digunakan untuk update data tanpa merubah tampilan, 2. untuk manipulasi DOM
  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <div className="relative rounded-xl overflow-auto">
      <div className="shadow-sm overflow-hidden my-5">
        <table
          className={`text-left border border-black table-auto w-full text-sm ${
            isDarkMode && "dark:text-white dark:border-white"
          }`}
        >
          <thead>
            <tr>
              <th
                className={`border border-black font-bold p-2 text-center ${
                  isDarkMode && "dark:border-white"
                }`}
              >
                Product
              </th>
              <th
                className={`border border-black font-bold p-2 text-center ${
                  isDarkMode && "dark:border-white"
                }`}
              >
                Price
              </th>
              <th
                className={`border border-black font-bold p-2 text-center ${
                  isDarkMode && "dark:border-white"
                }`}
              >
                Qty
              </th>
              <th
                className={`border border-black font-bold p-2 text-center ${
                  isDarkMode && "dark:border-white"
                }`}
              >
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
                    <td
                      className={`border border-black font-medium p-1 text-left ${
                        isDarkMode && "dark:border-white"
                      }`}
                    >
                      {product.title.substring(0, 30)}...
                    </td>
                    <td
                      className={`border border-black font-medium p-1 text-left ${
                        isDarkMode && "dark:border-white"
                      }`}
                    >
                      ${product.price.toLocaleString("id-ID")}
                    </td>
                    <td
                      className={`border border-black font-medium p-1 text-center ${
                        isDarkMode && "dark:border-white"
                      }`}
                    >
                      {item.qty}
                    </td>
                    <td
                      className={`border border-black font-medium p-1 text-right ${
                        isDarkMode && "dark:border-white"
                      }`}
                    >
                      ${(item.qty * product.price).toLocaleString("id-ID")}
                    </td>
                  </tr>
                );
              })}
            <tr ref={totalPriceRef}>
              <td
                className={`border border-black font-medium p-1 text-center ${
                  isDarkMode && "dark:border-white"
                }`}
                colSpan={3}
              >
                <b>Total Price</b>
              </td>
              <td
                className={`border border-black font-medium p-1 text-right ${
                  isDarkMode && "dark:border-white"
                }`}
              >
                <b>${total.toLocaleString("id-ID")}</b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCart;
