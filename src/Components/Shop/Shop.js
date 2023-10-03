import React, { useEffect, useState } from "react";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Shop.module.css";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

export default function Shop(props) {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [priceRange, setPriceRange] = useState("50");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleOnChangePriceRange = (e) => {
    setPriceRange(e.target.value);
  };

  const getProducts = async () => {
    try {
      if (Cookies.get("accessToken")) {
        const res = await axios.get("http://localhost:8000/getProduct");
        setProducts(res.data);
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log("error in getting products", err);
    }
  };

  return (
    <main>
      <NavbarComponent
        cartCount={props.cartCount}
        showLogout={true}
        name={props.name}
      />
      <div className={styles.categoryContainer}>{selectedCategory}</div>
      <div className={styles.mainContainer}>
        <section className={styles.featuredProducts}>
          {products
            .filter(
              (product) =>
                product.productName
                  .toLowerCase()
                  .trim()
                  .includes(searchText.toLowerCase().trim()) &&
                product.price <= priceRange &&
                (selectedCategory === null ||
                  product.category === selectedCategory)
            )
            .map((product, index) => (
              <div
                className={styles.productCard}
                key={product.id}
                index={index}
              >
                <ProductCard
                  srcLink={product.imgurl1}
                  productName={product.productName}
                  price={product.price}
                  id={product.id}
                  category={product.category}
                  cartCount={props.cartCount}
                  setCartCount={props.setCartCount}
                  email={props.email}
                />
              </div>
            ))}
        </section>
        <aside className={styles.asideContainer}>
          <div className={styles.searchContainer}>
            <h2 className={styles.searchTitle}>SEARCH</h2>
            <input
              className={styles.searchClass}
              type="search"
              placeholder="Search for a product"
              value={searchText}
              onChange={handleSearchInputChange}
            ></input>
            <h3 className={styles.priceTitle}>PRICE</h3>
            <input
              type="range"
              min="0"
              max="50"
              onChange={handleOnChangePriceRange}
            ></input>
            <br></br>
            <span className={styles.mySpan}>
              <b>Price:</b> ${priceRange}{" "}
            </span>
            <h3 className={styles.categoriesTitle}>CATEGORIES</h3>
            <div className={styles.myAllCategories}>
              <p onClick={() => setSelectedCategory("clothes")}>Clothes</p>
              <p onClick={() => setSelectedCategory("canoeing")}>Canoeing</p>
              <p onClick={() => setSelectedCategory("equipment")}>Equipment</p>
              <p onClick={() => setSelectedCategory("paddling")}>Paddling</p>
              <p onClick={() => setSelectedCategory("rental")}>Rental</p>
              <p onClick={() => setSelectedCategory("scubadiving")}>
                Scubadiving
              </p>
              <p onClick={() => setSelectedCategory("surfing")}>Surfing</p>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </main>
  );
}
