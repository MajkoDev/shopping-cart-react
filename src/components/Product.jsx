import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Product = ({ item }) => {
  const { addToBasket } = useContext(StoreContext);

  const handleAdd = () => {
    addToBasket(item);
  };

  return (
    <div className="mx-auto px-8 m-4 border border-gray-200 rounded-lg">
      <div className="flex flex-row items-center justify-center gap-16">
        <div>
          <h2 className="text-xl font-semibold">{item.name}</h2>
          <p className="text-md">Price: {item.price} $</p>
        </div>
        <button
          className="bg-indigo-500 text-white text-md font-medium rounded-full p-1"
          onClick={handleAdd}
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
