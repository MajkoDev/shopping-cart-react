import React from "react";
import { storeData } from "../data";
import Product from "../components/Product";

const Home = () => {
  console.log(storeData);
  return (
    <div className="flex flex-col items-center">
      {storeData.map((item, i) => (
        <Product key={i} item={item} />
      ))}
    </div>
  );
};

export default Home;
