import React from "react";
import { Button, Card } from "react-bootstrap";

const Item = ({ item, modifyCart, action, buttonColor }) => {
  return (
    <Card className="h-100" style={{ width: "18rem" }}>
      <div className="text-center">
        <Card.Img
          variant="top"
          src={item.image}
          style={{ width: "100px", height: "130px", padding: "5px" }}
        />
      </div>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>{item.price} $</Card.Text>
      </Card.Body>
      <Card.Footer style={{ background: "white" }}>
        <Button variant={buttonColor} onClick={() => modifyCart(item)}>
          {action}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Item;
