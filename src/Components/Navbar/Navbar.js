import React from "react";
import styles from "./Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function NavbarComponent(props) {
  const navigate = useNavigate();

  const handleCartNavigation = () => {
    navigate("/cart");
  };

  const getCartCount = () => {
    const cartCount = props.cartCount;
    return cartCount;
  };

  const handleShopNavigation = () => {
    navigate("/shop");
  };

  const handleLoginNavigation = () => {
    navigate("/login");
  };

  const handleRegisterNavigation = () => {
    navigate("/register");
  };

  const handleTitleNavigation = () => {
    navigate("/shop");
  };

  const handleLogoutNavigation = () => {
    Cookies.remove("accessToken");
    navigate("/login");
  };

  return (
    <main>
      <div>
        <Navbar bg="light" data-bs-theme="light" className={styles.container}>
          <Container>
            <Navbar.Brand
              className={styles.myTitle}
              onClick={handleTitleNavigation}
            >
              bloowatch
            </Navbar.Brand>
            <Nav className="d-flex">
              {props.showLogout ? (
                <React.Fragment>
                  <Nav.Link onClick={handleCartNavigation}>
                    <FontAwesomeIcon icon={faShoppingCart} /> Cart
                    <span className={styles.cartCount}>{getCartCount()}</span>
                  </Nav.Link>
                  <Nav.Link onClick={handleShopNavigation}>Shop</Nav.Link>
                  <Dropdown>
                    <Dropdown.Toggle
                      style={{
                        background: "none",
                        border: "none",
                        color: "#575757",
                        fontSize: "18px",
                      }}
                    >
                      {props.name}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>{props.name}</Dropdown.Item>
                      <Nav.Link onClick={handleLogoutNavigation}>
                        Logout
                      </Nav.Link>
                    </Dropdown.Menu>
                  </Dropdown>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Nav.Link onClick={handleRegisterNavigation}>
                    Register
                  </Nav.Link>
                  <Nav.Link onClick={handleLoginNavigation}>Login</Nav.Link>
                </React.Fragment>
              )}
            </Nav>
          </Container>
        </Navbar>
      </div>
    </main>
  );
}
