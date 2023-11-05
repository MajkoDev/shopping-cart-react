import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = () => {
  const { products } = useContext(StoreContext);
  return (
    <div className="flex flex-row justify-evenly p-4 font-medium bg-slate-50">
      <Link to="/">Home</Link>
      <Link to="/basket">
        Basket
        <span className="text-sx align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1">
          {products.length}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
