import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CartContext from "../CartContext";

const CheckoutPage = () => {
  const { cartItem } = useContext(CartContext);
  //   console.log(item);
  //   const [itemCount, setItemCount] = useState([]);

  //   const addButton = (cartItem) => {
  //     const itemExist = itemCount.find((item) => item.id === cartItem.id);
  //     if (itemExist) {
  //       setItemCount(
  //         itemCount.map((item) => {
  //           item.id === cartItem.id
  //             ? { ...itemExist, quantity: item.quantity + 1 }
  //             : item;
  //         })

  //       );
  //     } else {
  //       setItemCount([...itemCount, { ...cartItem, quantity: 1 }]);
  //     }
  //   };
  //   const onAdd = (cartItem) => {
  //     const itemExist = itemCount.find((x) => x.id === cartItem.id);
  //     if (itemExist) {
  //       setItemCount(
  //         itemCount.map((x) =>
  //           x.id === cartItem.id ? { ...itemExist, qty: itemExist.qty + 1 } : x
  //         )
  //       );
  //     } else {
  //       setItemCount([...itemCount, { ...cartItem, quantity: 1 }]);
  //     }
  //   };

  //   const increaseItem = () => {
  //   };
  //   console.log(increaseItem);

  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cartItem.reduce(
        (accumulator, currentValue) => accumulator + Number(currentValue.price),
        0
      )
    );
  }, [cartItem]);
  return (
    <CheckoutPage.Wrapper>
      <div className="cartitems">
        {cartItem.map((inCart) => (
          <div className="single-items">
            {/* <img src={inCart.img} alt="laptop" width="100%" /> */}
            <h2>{inCart.name}</h2>
            <p>{inCart.price}</p>
          </div>
        ))}
        <h2>Total:  ${total}</h2>
      </div>
    </CheckoutPage.Wrapper>
  );
};

export default CheckoutPage;

CheckoutPage.Wrapper = styled.div`
  color: #fff;
  .cartitems {
    display: flex;
    flex-direction: column;
    ${"" /* align-items: center; */}
    ${"" /* justify-content: space-between; */}
    margin: 0px 550px 0px 50px;

    h2{
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .single-items {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p:hover {
        cursor: pointer;
      }
    }
  }
`;
