import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <h1 className="text-center text-lg font-semibold py-3 bg-slate-100">
        Shopping Cart with React Hooks and Context
      </h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
 