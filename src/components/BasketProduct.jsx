import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const BasketProduct = ({ item }) => {
    const { removeFromBasket } = useContext(StoreContext);

    const handleRemove = () => {
        removeFromBasket(item)
    }
  return (
    <div className="flex flex-row gap-10 justify-center items-center">
      <p>{item.name}</p>
      <p>{item.price}</p>
      <button
     onClick={handleRemove}  className="text-red-600 text-sm border border-red-700 rounded-md p-1 m-1 hover:bg-red-600 hover:text-white">
        Remove
      </button>
    </div>
  );
};

export default BasketProduct;
