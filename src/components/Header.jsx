import Nav from 'react-bootstrap/Nav';
import React from 'react'
import { useSelector } from "react-redux";

const Header = () => {
   const cartproducts = useSelector(state=>state.cart)
  return (
    <div>
      <Nav>
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/products">Our Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/login">Login/Signup</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/cart">🛒 Cart: {cartproducts.length} </Nav.Link>
      </Nav.Item>
    </Nav>
      
    </div>
  )
}

export default Header
