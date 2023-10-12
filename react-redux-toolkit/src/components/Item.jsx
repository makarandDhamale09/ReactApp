import React from "react";
import { Button, Card } from "react-bootstrap";

const Item = ({ item }) => {
  return (
    <div className="col-md-3" style={{ marginBottom: "15px" }}>
      <Card className="h-100" key={item.id} style={{ width: "18rem" }}>
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
          <Button variant="primary">Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Item;
