import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { add } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const Product = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((result) => setProducts(result))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addtocart = (product) => {
    dispatch(add(product)); // Correctly pass the product to the add action.
  };

  const cards = products.map((product) => (
    <div className="col-md-3" key={product.id} style={{ marginBottom: "5px" }}> {/* Correctly use product.id for key */}
      <Card className="h-100"> {/* Remove key prop here */}
        <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{ width: "100px", height: "130px" }} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR:{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary" onClick={() => addtocart(product)}>Add to Cart</Button> {/* Use an arrow function to correctly pass the product */}
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div className="row">
      <h2 className="text-center">The Product dashboard</h2>
      {cards}
    </div>
  );
};

export default Product;
