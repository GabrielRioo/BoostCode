import React, { useEffect, useRef, useState } from "react";
import "../styles/Button.css";
import CustomButton from "../components/custom/CustomButton";
import ReactDOM from "react-dom";
import TrackVisibility from "react-on-screen";
import { Button, Overlay, Tooltip, Form } from "react-bootstrap";
import ComponentContent from "../components/ContentPage";
import ComponentAttributes from "../components/ComponentAttributes";
import ComponentsPage from "../components/ContentPage";

function Content() {
  const [attribute, setAttribute] = useState("");
  const [htmlResult, setHtmlResult] = useState("");

  

  return (
    <>
      <ComponentsPage
        component={
          <CustomButton 
            id="teste" 
            color="white" 
            backgroundColor={attribute}
          >
            Click Here
          </CustomButton>
        }
        attributes={[
          <ComponentAttributes 
            // backgroundColor={['backgroundColor', 'setBackgroundColor']}
            // onChange={(e) => {
            //   console.log('attribute', attribute)
            //   console.log(e.target.value)
            //   setAttribute(e.target.value);
              // setHtmlResult(
              //   `${document.getElementsByClassName("simple-button")[0].outerHTML}`
              // );
            
          />,
        ]
         
        }
      />
    </>
  );
}

export default Content;
