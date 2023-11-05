import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import BasketProduct from "../components/BasketProduct";

const Basket = () => {
  const { total, products } = useContext(StoreContext);

  return (
    <div className="flex flex-col items-center justify-between mt-2 text-xl">
      <div className="py-6 px-10 ">
        <h3>Your Basket</h3>

        <p>Total: {total.toFixed(2)} $</p>
      </div>
      {products.map((product, i) => (
        <BasketProduct key={i} item={product} />
      ))}
    </div>
  );
};

export default Basket;
