import React from "react";
import { Button } from "react-bootstrap";
import "./styles.scss";
// const product1 = require("../../assets/imgs/p1.jpg");
export default function Card({product}) {
  console.log("product:" , product);
  return (
    <div className="card-product pb-3 pt-2 my-3 mx-10">
      <div className="img">
        <img src={product.image} alt="p1" />
      </div>
      <div className="info-product">
        <h5>{product.name}</h5>
        <p>{product.brand}</p>
        <p>{product.chip}</p>
        <p>{product.price}</p>
      </div>
      <div className="btn-view">
        <Button variant="secondary">Secondary</Button>{" "}
      </div>
    </div>
  );
}
