import React, { useState } from "react";
import Loader from "./loader";
import Item from "./item";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { name: "Campera de Jean", price: 4000, location: "Buenos Aires" },
        { name: "Remera Blanca", price: 1200, location: "Buenos Aires" },
        { name: "Calzas negras", price: 900, location: "Buenos Aires" },
      ]);
    }, 2000);
  }).then(response => {
    setProducts(response);
  });
  return (
    <>
      {products.length ? (
        products.map(e => <Item name={e.name} />)
      ) : (
        <Loader size={70} />
      )}{" "}
    </>
  );
};

export default ItemList;