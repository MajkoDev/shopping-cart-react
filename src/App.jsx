import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";

function App() {
  return (
    <>
      <h1 className="text-center text-lg font-semibold">
        Shopping Cart with React Hooks and Context
      </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
