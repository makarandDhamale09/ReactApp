import React, { useEffect, useState } from "react";
import Item from "./Item";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Product = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    //api call to fetch products
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product));
  };

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">
        {products.map((item) => (
          <div
            className="col-md-3"
            style={{ marginBottom: "15px" }}
            key={item.id}
          >
            <Item item={item} modifyCart={addToCart} action="Add To Cart" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
