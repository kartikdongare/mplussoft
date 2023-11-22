import { Routes, Route } from "react-router-dom";
import NavBar from "./src/Component/NavBar";
import Home from "./src/Component/Home";
import About from "./src/Component/About";
import Contact from "./src/Component/Contact";
import ProductDetails from "./src/Component/ProductDetails";
const Routing = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-details/:category_id/:product_unit_id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
};

export default Routing;
