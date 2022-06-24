// Import the createContext hook from react
import { createContext, useState } from "react";
// import CartReducer from "./CartReducer";

// assign the context to a variable
const CartContext = createContext();

// export the provider: Any component that is wrapped around the provider will have access to the value(also called the data)
// Children is a props from react that represents all the components that is wrapped around the provider
// The provider basically provides data to all the components that are wrapped around it
// Next go and wrap the App with the CartProvider
// In any component that you want to use the data, you need to import the CartContext as well as the useContext hook and declare the data you want to use like this: const {item} = useContext(CartContext)
// You can also have more than one
export function CartProvider({ children }) {
  // declare a state that would hold the array of items in the cart
  const [cartItem, setCartItem] = useState([]);
  //   Write a function that'll update the cart
  //   the setState will take previousstate, also if there was any item in the array(...prev) and also the new object you want to add({name, price})
  // next pass in the state and the function to the value object.
  // setCartItem((prev) => [...prev, { name, price }]);
  // const addToCart = (id, name, price) => {
  //   setCartItem((currentCart) => {
  //     const existInCart = currentCart.some((item) => item.id === id);

  //     if (!existInCart) {
  //       return [{ id, quantity: 1 }, ...currentCart];
  //     }

  //     return currentCart.map((item) => {
  //       if (item.id !== id) return item;
  //       return {
  //         ...item,
  //         quantity: item.quantity + 1,
  //       };
  //     });
  //   });
  // };

  return (
    <CartContext.Provider value={{ cartItem, setCartItem}}>
      {children}
    </CartContext.Provider>
  );
}

// export the context
export default CartContext;
