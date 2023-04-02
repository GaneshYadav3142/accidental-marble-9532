import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/homepage";
// import About from "../page/about";
// import Users from "../page/users";
// import Contact from "../page/contact";

// import Singleuser from "../page/singleuser";
import Payment from "../pages/payment";
import Checkout from "../pages/checkout";
import Cart from "../pages/cart";
import Product from "../pages/Productpage";
import Singleproduct from "../pages/singleproductpage";


function AllRoute() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/productpage" element={<Product />} />
   
      {/* <Route path="/users" element={<Users />} /> */}
      <Route path="/productpage/:id" element={<Singleproduct />} />
      <Route path="/checkout"  element={<Checkout/>}/>
      <Route path="/payment" element={<Payment/>}/>
    </Routes>
  )
}

export default AllRoute;
