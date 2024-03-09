import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

//
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productdetail" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
