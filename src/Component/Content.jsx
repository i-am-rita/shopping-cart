import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import laptop from "../images/laptop.jpg";
const content = () => {
  const shoppingItems = [
    {
      id: 0,
      img: laptop,
      name: "Laptop",
      price: 20,
    },
    {
      id: 1,
      img: laptop,
      name: "Macbook",
      price: 50,
    },
    {
      id: 2,
      img: laptop,
      name: "Iphone",
      price: 40,
    },
    {
      id: 3,
      img: laptop,
      name: "Oculus",
      price: 90,
    },
    {
      id: 4,
      img: laptop,
      name: "Airpods",
      price: 120,
    },
    {
      id: 5,
      img: laptop,
      name: "Cables",
      price: 130,
    },
  ];
 

  // const handleClick = (item) => {
  // setCart(() => [...cart, item])
  // cart.push(item)
  // console.log(item)
  // }
  return (
    <content.Wrapper>
      <div className="content">
        {shoppingItems.map((item, id) => (
          <Card key={item.id} item={item} />
          // Go and destructure item in the card component
        ))}
      </div>
    </content.Wrapper>
  );
};

export default content;

content.Wrapper = styled.div`
  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 50px 80px;

    h2 {
      color: #fff;
    }

    p {
      color: #fff;
    }
  }
`;
