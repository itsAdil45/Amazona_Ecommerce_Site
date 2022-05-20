import React from "react";
import { Link } from "react-router-dom";
import data from "../Data";

export default function HomeScreen() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((item) => (
          <div className="product" key={item.slug}>
            <Link to={`/product/${item.slug}`}>
              <img src={item.image} alt="tshirt" />
            </Link>
            <div className="product-info">
              <Link to={`/product/${item.slug}`}>
                <p>{item.name}</p>
              </Link>
              <p>
                <strong>${item.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}