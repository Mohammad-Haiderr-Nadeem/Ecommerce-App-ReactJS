import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./ProductDetails.module.css";

export default function ProductDetails(props) {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState(true);
  const [information, setInformation] = useState(false);
  const [reviews, setReviews] = useState(false);
  const { id } = useParams();
  const [showImage1, setShowImage1] = useState(true);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage4, setShowImage4] = useState(false);

  useEffect(() => {
    getProduct(id);
  }, [id]);

  const getProduct = async (id) => {
    try {
      const res = await axios.get(`http://localhost:8000/getProduct/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.log("error in getting product detals", err);
    }
  };

  const handleAddToCart = async () => {
    try {
      await axios.post("http://localhost:8000/addProductToCart", {
        imgurl: product.imgurl1,
        productName: product.productName,
        category: product.category,
        price: product.price,
        quantity: quantity,
        email: props.email,
      });
      setQuantity(1);
      props.setCartCount(props.cartCount + 1);
    } catch (err) {
      console.log("error in adding product to cart", err);
    }
  };

  const handleOnChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleDescription = () => {
    setDescription(true);
    setInformation(false);
    setReviews(false);
  };

  const handleInformation = () => {
    setDescription(false);
    setInformation(true);
    setReviews(false);
  };

  const handleReviews = () => {
    setDescription(false);
    setInformation(false);
    setReviews(true);
  };

  const handleIncrement = () => {
    setQuantity(Math.min(quantity + 1, 10));
  };

  const handleDecrement = () => {
    setQuantity(Math.max(quantity - 1, 1));
  };

  const handleImageOne = () => {
    setShowImage1(true);
    setShowImage2(false);
    setShowImage3(false);
    setShowImage4(false);
  };

  const handleImageTwo = () => {
    setShowImage1(false);
    setShowImage2(true);
    setShowImage3(false);
    setShowImage4(false);
  };

  const handleImageThree = () => {
    setShowImage1(false);
    setShowImage2(false);
    setShowImage3(true);
    setShowImage4(false);
  };

  const handleImageFour = () => {
    setShowImage1(false);
    setShowImage2(false);
    setShowImage3(false);
    setShowImage4(true);
  };

  return (
    <main>
      <NavbarComponent
        cartCount={props.cartCount}
        showLogout={true}
        name={props.name}
      ></NavbarComponent>
      <div className={styles.outerContainer}>
        <div className={styles.smallImagesContainer}>
          <div className={styles.smallImages}>
            <img
              src={product.imgurl1}
              alt={"Product"}
              width="100px"
              height="100px"
              onClick={handleImageOne}
            />
          </div>
          <div className={styles.smallImages}>
            <img
              src={product.img2}
              alt={"Product"}
              width="100px"
              height="100px"
              onClick={handleImageTwo}
            />
          </div>
          <div className={styles.smallImages}>
            <img
              src={product.img3}
              alt={"Product"}
              width="100px"
              height="100px"
              onClick={handleImageThree}
            />
          </div>
          <div className={styles.smallImages}>
            <img
              src={product.img4}
              alt={"Product"}
              width="100px"
              height="100px"
              onClick={handleImageFour}
            />
          </div>
        </div>
        <div className={styles.innerImageContainer}>
          {showImage1 && (
            <div>
              <img
                src={product.imgurl1}
                alt={"Product"}
                width="500px"
                height="500px"
              />
            </div>
          )}
          {showImage2 && (
            <div>
              <img
                src={product.img2}
                alt={"Product"}
                width="500px"
                height="500px"
              />
            </div>
          )}
          {showImage3 && (
            <div>
              <img
                src={product.img3}
                alt={"Product"}
                width="500px"
                height="500px"
              />
            </div>
          )}
          {showImage4 && (
            <div>
              <img
                src={product.img4}
                alt={"Product"}
                width="500px"
                height="500px"
              />
            </div>
          )}
        </div>
        <div>
          <h1 className={styles.title}>{product.productName}</h1>
          <p className={styles.myPrice}>$ {product.price}</p>
          <p className={styles.dummyText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.<br></br> Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s,<br></br> when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <input
            type="number"
            min="1"
            max="10"
            placeholder="1"
            onChange={handleOnChangeQuantity}
            value={quantity}
          ></input>
          <button className={styles.arrowButtonUp} onClick={handleIncrement}>
            /\
          </button>
          <button className={styles.arrowButtonDown} onClick={handleDecrement}>
            \/
          </button>
          <button className={styles.myButton} onClick={handleAddToCart}>
            Add to Cart
          </button>
          <br></br>
          <br></br>
          <span>
            <b>CATEGORY:</b> <span>{product.category}</span>{" "}
          </span>
          <br></br>
          <span>
            <b>SKU:</b> <span>123</span>{" "}
          </span>
          <br></br>
          <span>
            <b>TAGS:</b> <span>Clothes</span>{" "}
          </span>
        </div>
      </div>
      <div className={styles.lowerContainer}>
        <span>
          <span className={styles.slider} onClick={handleDescription}>
            DESCRIPTION
          </span>
          <span className={styles.slider} onClick={handleInformation}>
            ADDITIONAL INFORMATION
          </span>
          <span className={styles.slider} onClick={handleReviews}>
            REVIEWS(2)
          </span>
        </span>
        {description && (
          <div>
            <div
              className={styles.headingUnderline}
              style={{ width: "110px", marginLeft: "3%" }}
            >
              Description
            </div>
            <p style={{ marginLeft: "3%", marginTop: "1%" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.<br></br>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>
        )}
        {information && (
          <div>
            <div
              className={styles.headingUnderline}
              style={{ width: "220px", marginLeft: "13%" }}
            >
              Description
            </div>
            <p style={{ marginLeft: "3%", marginTop: "1%" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.<br></br>
            </p>
          </div>
        )}
        {reviews && (
          <div>
            <div
              className={styles.headingUnderline}
              style={{ width: "95px", marginLeft: "32%" }}
            >
              Description
            </div>
            <p style={{ marginLeft: "3%", marginTop: "1%" }}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>
        )}
      </div>
      <Footer></Footer>
    </main>
  );
}
