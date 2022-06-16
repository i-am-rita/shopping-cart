import React, { useContext } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import CartContext from "../CartContext";

const Card = ({ item}) => {
  const { addToCart } = useContext(CartContext);
  const { id, img, name, price } = item;
  return (
    <Card.Wrapper>
      <div className="content-details">
        <div key={id}>
          <img src={img} alt="laptop" width="100%" />
          <h2>{name}</h2>
          <p>${price}</p>
          <Button
            variant="outlined"
            color="success"
            // onClick={() => handleClick(item)}
            onClick={() => addToCart( id, name, price)}
          >
            Add to cart
          </Button>
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
