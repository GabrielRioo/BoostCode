import React, { useState } from "react";
import { Form } from "react-bootstrap";



function ComponentAttributes(props: any) {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [htmlResult, setHtmlResult] = useState("");

  return (
    // <div className="css-component">
      <div className="input-items">
        <Form.Label htmlFor="BackgroundColor">BackgroundColor</Form.Label>
        <Form.Control
          type="email"
          placeholder="Cor de fundo"
          onChange={(e) => {
            setBackgroundColor(e.target.value);
            setHtmlResult(
              `${document.getElementsByClassName("simple-button")[0].outerHTML}`
            );
          }}
          // onBlur={() => {
          //   setHtmlResult(
          //     `${document.getElementsByClassName("simple-button")[0].outerHTML}`
          //   );
          // }}
        />
      </div>
    // </div>
  );
}

export default ComponentAttributes;
