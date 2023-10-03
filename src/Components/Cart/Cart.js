import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import NavbarComponent from "../Navbar/Navbar";
import CartTotal from "../CartTotal/CartTotal";
import Footer from "../Footer/Footer";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";

export default function Cart(props) {
  const [bill, setBill] = useState(0);
  const [productsInCart, setProductsIncart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getCartProducts = async () => {
      try {
        if (Cookies.get("accessToken")) {
          const res = await axios.get(
            "http://localhost:8000/getProductFromCart",
            {
              params: {
                email: props.email,
              },
            }
          );
          setProductsIncart(res.data);
        } else {
          navigate("/login");
        }
      } catch (err) {
        console.log("error in fetching data from cart", err);
      }
    };
    getCartProducts();
  }, [productsInCart, props.email]);

  useEffect(() => {
    const totalPrice = productsInCart
      .filter((product) => product.email === props.email)
      .reduce((previousValue, currentValue) => {
        return previousValue + currentValue.price * currentValue.quantity;
      }, 0);
    setBill(totalPrice);
  }, [productsInCart]);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/removeProductFromCart/${id}`);
      const updatedProductsInCart = productsInCart.filter((product) => {
        return !(id === product.id);
      });
      if (props.cartCount > 0) {
        props.setCartCount(props.cartCount - 1);
      }
      setProductsIncart(updatedProductsInCart);
    } catch (err) {
      console.log("error in deleting product from cart", err);
    }
  };

  return (
    <main>
      <div>
        <NavbarComponent
          cartCount={props.cartCount}
          showLogout={true}
          name={props.name}
        />
        <table className={styles.myTable}>
          <thead className={styles.myThead}>
            <tr>
              <th></th>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody className={styles.myTbody}>
            {productsInCart.length ? (
              productsInCart.map((product, index) => (
                <tr className={styles.myTbody} key={index}>
                  {product.email === props.email ? (
                    <>
                      <td>
                        <button
                          className={styles.myButton}
                          onClick={() => handleRemove(product.id)}
                        >
                          X
                        </button>
                      </td>
                      <td>
                        <span>
                          <img
                            style={{ padding: "10px" }}
                            src={product.imgurl}
                            alt="product"
                            width="80px"
                            height="80px"
                          ></img>
                          <span>{product.productName}</span>
                        </span>
                      </td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>
                      <td>{product.price * product.quantity}</td>
                    </>
                  ) : (
                    <></>
                  )}
                </tr>
              ))
            ) : (
              <tr style={{ textAlign: "center" }}>
                <td>No products to show.</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
        <div className={styles.buttonsContainer}>
          <button className={styles.myApplyCouponButton}>APPLY COUPON</button>
          <button className={styles.myUpdateCartButton}>UPDATE CART</button>
        </div>
      </div>
      <CartTotal bill={bill}></CartTotal>
      <Footer></Footer>
    </main>
  );
}
