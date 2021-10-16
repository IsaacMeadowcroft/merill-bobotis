import React from "react";
import "../css/Cart.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TCartItem, IWindowShopCartProps } from "./Interfaces";
import CartItem from "./CartItem";

function Cart(props: IWindowShopCartProps): JSX.Element {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/merill-site/">Back</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container fluid id="Cart">
        {Array.from(props.cartItems.keys()).map((item) => {
          let cartItem: TCartItem;
          const quantity = props.cartItems.get(item);
          try {
            cartItem = JSON.parse(item);
          } catch (err) {
            return <></>;
          }
          if (quantity) {
            return (
              <CartItem
                quantity={quantity}
                cartItem={cartItem}
                shopItems={props.shopItems}
                dimensions={props.dimensions}
                scrollPosition={props.scrollPosition}
                addCartItem={props.addCartItem}
                removeCartItem={props.removeCartItem}
              />
            );
          } else {
            return <></>;
          }
        })}
      </Container>
    </>
  );
}

export default Cart;
