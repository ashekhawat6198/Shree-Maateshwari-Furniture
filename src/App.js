import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Sofas from "./Pages/Sofas";
import Living from "./Pages/Living";
import Bedroom from "./Pages/Bedroom";
import DinningKitchen from "./Pages/Dinning-Kitchen";
import KidsRoom from "./Pages/KidsRoom";
import Decor from "./Pages/Decor";
import Order from "./Pages/Order";
import { LuPhoneCall } from "react-icons/lu";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <div>
    <CartProvider>
      <Navbar />
      </CartProvider>

      <a href="tel:919561918591">
        <div className="flex gap-x-4 w-48 p-2 bg-[#CB8D5B] fixed  rounded-md top-[35rem] text-white border-white border z-50">
          <LuPhoneCall fontSize={28} />
          <div>
            <p className="text-lg  font-bold">Buy on Phone</p>
            <p className="font-bold text-white">9561918591</p>
          </div>
        </div>
      </a>
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop/sofa" element={<Sofas />} />
        <Route path="/shop/living" element={<Living />} />
        <Route path="/shop/bedroom" element={<Bedroom />} />
        <Route path="/shop/dinning" element={<DinningKitchen />} />
        <Route path="/shop/kids" element={<KidsRoom />} />
        <Route path="/shop/decor" element={<Decor />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
