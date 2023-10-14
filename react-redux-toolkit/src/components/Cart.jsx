import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const productCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch(remove(product.id));
  };

  return (
    <div className="row">
      {productCart.map((item) => (
        <div
          className="col-md-12"
          style={{ margin: "10px", paddingLeft: "400px" }}
          key={item.id}
        >
          <Item
            item={item}
            modifyCart={removeFromCart}
            action="Remove Item"
            buttonColor="danger"
          ></Item>
        </div>
      ))}
    </div>
  );
};

export default Cart;
