import React from 'react';
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Cart = () => {
    const products = useSelector(state => state.cart);

    const cards = products.map((product) => (
        <div className="col-md-3" key={product.id} style={{ marginBottom: "5px" }}>
            <Card key={product.id} className="h-100">
                <div className="text-center">
                    <Card.Img
                        variant="top"
                        src={product.image}
                        style={{ width: "100px", height: "130px" }}
                    />
                </div>

                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>INR: {product.price}</Card.Text>
                </Card.Body>
                
            </Card>
        </div>
    ));

    return (
        <div>
            <h2>Cart</h2>
            <div className="row">{cards}</div>
        </div>
    );
}

export default Cart;
