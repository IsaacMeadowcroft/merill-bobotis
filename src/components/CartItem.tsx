import React, { useState } from "react";
import "../css/Cart.css";
import { Image, Col, Row, Badge, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ICartItemProps, Size } from "./Interfaces";
import { BsTrash } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";

function CartItem(props: ICartItemProps): JSX.Element {
  const [quantity, setQuantity] = useState(props.quantity);
  const [visible, setVisible] = useState(true);

  if (visible) {
    return (
      <Row style={{ padding: "0px", backgroundColor: "white", margin: "1vh" }}>
        <Col sm={1} style={{ padding: "0px", margin: "0px" }}>
          <Image
            style={{ maxWidth: "90%" }}
            src={
              props.shopItems?.find((x) => x.id === props.cartItem.id)?.image
            }
          />
        </Col>
        <Col sm={7} className="position-relative">
          <Container className="position-absolute top-50 start-0 translate-middle-y">
            <div style={{ textAlign: "center", width: "100%" }}>
              {props.shopItems?.find((x) => x.id === props.cartItem.id)?.title}
            </div>
            <div style={{ textAlign: "center", width: "100%" }}>
              {Size[props.cartItem.size]}
            </div>
          </Container>
        </Col>
        <Col sm={1} className="position-relative">
          <div
            className="position-absolute top-50 start-0 translate-middle-y"
            style={{ width: "100%", textAlign: "center" }}
          >
            <Row>
              <Col
                sm={4}
                className="cart-item-button"
                onClick={() => {
                  props.addCartItem(props.cartItem.id, props.cartItem.size);
                  setQuantity(quantity + 1);
                }}
              >
                <FiPlus />
              </Col>
              <Col sm={4}>
                <Badge bg="light" text="dark">
                  {quantity}
                </Badge>
              </Col>
              <Col
                sm={4}
                className="cart-item-button"
                onClick={() => {
                  props.minusCartItem(props.cartItem.id, props.cartItem.size);
                  if (quantity - 1 <= 0) {
                    setVisible(false);
                  } else {
                    setQuantity(quantity - 1);
                  }
                }}
              >
                <FiMinus />
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          sm={2}
          className="position-relative"
          style={{ padding: "0px", margin: "0px" }}
        >
          <div
            className="position-absolute top-50 start-0 translate-middle-y"
            style={{ width: "100%", textAlign: "center" }}
          >
            $
            {(props.shopItems?.find((x) => x.id === props.cartItem.id)?.price ||
              1) * quantity}
          </div>
        </Col>
        <Col sm={1} className="position-relative">
          <div
            className="position-absolute top-50 start-0 translate-middle-y cart-item-button"
            style={{ width: "100%", textAlign: "center" }}
            onClick={() => {
              props.removeCartItem(props.cartItem.id, props.cartItem.size);
              setVisible(false);
            }}
          >
            <BsTrash />
          </div>
        </Col>
      </Row>
    );
  } else {
    return <></>;
  }
}

export default CartItem;
