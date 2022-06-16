import React, { useState, useContext } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CartContext from "./CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const { cartItem } = useContext(CartContext);
  // console.log(cartItem);
  return (
    <Navbar.Wrapper>
      <div className="navbar">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h2>Schop</h2>
        </Link>
        {/* <nav className="navbar"> */}
        <form className="input-section">
          <input
            type="text"
            placeholder="Search for any item"
            name="search"
            onChange={handleChange}
            value={search}
          />
          <Link to="/CheckoutPage" style={{ textDecoration: "none" }}>
            <ShoppingCartIcon style={{ color: "#fff" }} />
            <span style={{ color: "#fff" }}>{cartItem.length}</span>
          </Link>
        </form>
        {/* </nav> */}
      </div>
    </Navbar.Wrapper>
  );
};
export default Navbar;

Navbar.Wrapper = styled.div`
  ${"" /* background: #000; */}
  .navbar {
    background-color: rgb(45, 35, 21);
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    h2 {
      color: #fff;
      text-decoration: none;
    }
  }
  .input-section {
    display: flex;
    align-items: center;
  }
  .input-section input {
    margin: 0 30px;
    padding: 5px 100px 5px 10px;
    border: 2px solid #fff;
    border-radius: 3px;
  }
`;
