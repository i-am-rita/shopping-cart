import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import CartContext from "../CartContext";

const Card = ({ item }) => {
  // const [cart, setCart] = useState(0);
  const { cartItem, setCartItem } = useContext(CartContext);
  const { id, img, name, price } = item;
  return (
    <Card.Wrapper>
      <div className="content-details">
        <div key={id}>
          <img src={img} alt="laptop" width="100%" />
          <h2>{name}</h2>
          <p>${price}</p>
          {cartItem.includes(item) ? (
            <Button
              variant="outlined"
              color="success"
              onClick={() => {
                setCartItem(cartItem.filter((prod) => prod.id !== item.id));
              }}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              variant="outlined"
              color="success"
              onClick={() => {
                setCartItem([...cartItem, item]);
              }}
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </Card.Wrapper>
  );
};

export default Card;

Card.Wrapper = styled.div`
  .content-details {
    display: flex;
    border: 2px solid #545445;
    padding: 30px 20px;
  }
`;
