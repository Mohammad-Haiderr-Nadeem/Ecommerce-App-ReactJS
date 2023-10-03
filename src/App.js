import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./Components/Register/Register";
import Error from "./Components/Error/Error";
import Shop from "./Components/Shop/Shop";
import Cart from "./Components/Cart/Cart";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import { useState } from "react";
import RequireAuth from "./Components/RequireAuth/RequireAuth";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigate to="/login" />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/login"
          element={
            <Login
              email={email}
              setEmail={setEmail}
              name={name}
              setName={setName}
              cartCount={cartCount}
              setCartCount={setCartCount}
            />
          }
        >
          {" "}
        </Route>
        {/* <Route element={<RequireAuth />}> */}
          <Route
            exact
            path="/shop"
            element={
              <Shop
                cartCount={cartCount}
                setCartCount={setCartCount}
                email={email}
                name={name}
              />
            }
          ></Route>
          <Route
            exact
            path="/cart"
            element={
              <Cart
                cartCount={cartCount}
                setCartCount={setCartCount}
                email={email}
                name={name}
              />
            }
          ></Route>
          <Route exact path="/*" element={<Error />}></Route>
          <Route
            exact
            path="/productdetails/:id"
            element={
              <ProductDetails
                cartCount={cartCount}
                setCartCount={setCartCount}
                email={email}
                name={name}
              />
            }
          ></Route>
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
