// import React, { useState } from "react";
import { Form } from "react-bootstrap";

function TextBox(props) {
  return (
    <div
      style={{
        margin: "65px",
        border: "2px solid gray",
        borderBlockColor: "green",
        boxShadow: "3px 2px 3px 2px #9e9e9e",
      }}
    >
      <Form>
        <Form.Group>
          <Form.Control
            as="textarea"
            placeholder={props.text}
            style={{
              height: "30vh",
              backgroundColor: "#fff",
              paddingTop: "20px",
            }}
            required
          />
        </Form.Group>
      </Form>
    </div>
  );
}

export default TextBox;
