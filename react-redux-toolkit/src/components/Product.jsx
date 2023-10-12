import React, { useEffect, useState } from "react";
import Item from "./Item";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //api call to fetch products
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">
        {products.map((item) => (
          <Item item={item} />
        ))}
      </div>
    </>
  );
};

export default Product;
