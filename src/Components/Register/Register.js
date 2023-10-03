import React, { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSpanClick = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/signUp", {
        name: name,
        email: email,
        password: password,
      });

      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (err) {
      console.log("error registering the user", err);
      alert("Email already exists!!/Error in registering the user.");
    }
  };

  return (
    <main>
      <NavbarComponent />
      <div className={styles.container}>
        <div>
          <h1 className={styles.myTitle}>Register</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className={styles.iconLabel}>
              <input
                className={styles.myEmail}
                required
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleOnChangeName}
                value={name}
              />
              <FontAwesomeIcon icon={faUser} className={styles.icon} />
            </label>
          </div>
          <div>
            <label htmlFor="email" className={styles.iconLabel}>
              <input
                className={styles.myEmail}
                required
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleOnChangeEmail}
                value={email}
              />
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            </label>
          </div>
          <div>
            <label htmlFor="password" className={styles.iconLabel}>
              <input
                className={styles.myPassword}
                required
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleOnChangePassword}
              />
              <FontAwesomeIcon icon={faLock} className={styles.icon} />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.passwordToggle}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </label>
          </div>
          <div>
            <button className={styles.myButton} type="submit">
              Register
            </button>
          </div>
        </form>
        <div className={styles.spanContainer}>
          <div className={styles.spanContainer}>
            <span className={styles.mySpan}>
              {" "}
              By registering up, you confirm that you have read and accepted our{" "}
              <span style={{ color: "blue" }}>User Notice</span> and{" "}
              <span style={{ color: "blue" }}>Private Policy</span>.
            </span>
          </div>
          <span className={styles.mySpan}>
            Already a member?{" "}
            <span className={styles.myRegister} onClick={handleSpanClick}>
              Login
            </span>{" "}
          </span>
        </div>
        <div className={styles.spanContainer}>
          <span className={styles.mySpan}>
            Want to become a seller?{" "}
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
