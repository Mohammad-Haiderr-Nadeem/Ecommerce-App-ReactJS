import React, { useState, useContext } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import authContext from "../Context/AuthProvider";
import Cookies from "js-cookie";

export default function Login(props) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useContext(authContext);
  const [token, setToken] = useState("");

  axios.defaults.withCredentials = true;

  const getCartLength = async () => {
    await axios
      .get("http://localhost:8000/getProductFromCart", {
        params: {
          email: props.email,
        },
      })
      .then((response) => {
        props.setCartCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error in Axios GET request:", error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/login", {
        email: props.email,
        password: password,
      });
      const userResponse = await axios.get("http://localhost:8000/getUsers");
      const userName = userResponse.data.filter(
        (user) => user.email === props.email
      );
      props.setName(userName.length > 0 && userName[0]?.name);
      setToken(Cookies.get("accessToken"));
      setAuth({ email: props.email, password, token });
      if (Cookies.get("accessToken") && res) {
        getCartLength();
        navigate("/shop");
      } else {
        alert("Token is missing");
      }
    } catch (err) {
      console.log("error logging into the website", err);
      alert("Invalid email or password/Please register yourself!!");
    }
  };

  const handleSpanClick = () => {
    navigate("/register");
  };

  const handleOnChangeEmail = (e) => {
    props.setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main>
      <NavbarComponent cartCount={props.cartCount} name={props.name} />
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className={styles.myTitle}>Login</h1>
          </div>
          <div>
            <label htmlFor="email" className={styles.inputContainer}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.inputIcon} />
              <input
                className={styles.myEmail}
                required
                type="email"
                name="email"
                placeholder="       Email"
                onChange={handleOnChangeEmail}
                value={props.email}
              ></input>
            </label>
          </div>
          <div>
            <label htmlFor="password" className={styles.inputContainer}>
              <FontAwesomeIcon icon={faLock} className={styles.inputIcon} />
              <input
                className={styles.myPassword}
                required
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="      Password"
                value={password}
                onChange={handleOnChangePassword}
              ></input>
              <div
                className={styles.showPasswordIcon}
                onClick={toggleShowPassword}
              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </div>
            </label>
          </div>
          <div>
            <button className={styles.myButton} type="submit">
              Login
            </button>
          </div>
        </form>
        <div className={styles.spanContainer}>
          <span className={styles.mySpan}>
            Don't have an account?{" "}
            <span className={styles.myRegister} onClick={handleSpanClick}>
              Register
            </span>{" "}
          </span>
        </div>
      </div>
      <Footer></Footer>
    </main>
  );
}
