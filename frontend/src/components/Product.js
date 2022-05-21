import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Rating from "./Rating";
export default function Product(props) {
  const { item } = props;
  return (
    <Card>
      <Link to={`/product/${item.slug}`}>
        <img src={item.image} alt="tshirt" className="card-img-top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${item.slug}`}>
          <Card.Title>{item.name}</Card.Title>
        </Link>
        <Rating rating={item.rating} numReviews={item.numReviews} />
        <Card.Text>
          <strong>${item.price}</strong>
        </Card.Text>
        <Button className="btn-primary">Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
