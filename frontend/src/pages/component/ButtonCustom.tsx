import { Box, styled, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import ComponentsPage from "../../components/ContentPage";
import ComponentAttributes from "../../components/ComponentAttributes";
import Input from "../../components/Input";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "blue",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "blue",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "dark",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

function ButtonCustom(props: any) {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [color, setColor] = useState("");
  const [htmlResult, setHtmlResult] = useState("");

  useEffect(() => {
    window.addEventListener("change", (event) => {
      console.log('event teste ', event)
      console.log('abc', event.target)
      setHtmlResult(
        `${document.getElementsByClassName("simple-button")[0].outerHTML}`
      )
    })
    setHtmlResult(
      `${document.getElementsByClassName("simple-button")[0].outerHTML}`
    );
  }, []);

  return (
    <>
      <ComponentsPage
        title="Button"
        component={
          <button
            className="simple-button"
            // id={props.id}
            style={{
              backgroundColor: backgroundColor,
              color: color,
              padding: "",
            }}
            onChange={(e) => {
              window.addEventListener('change', (event) => {
                console.log('abcd', event.target)
                setHtmlResult(
                  `${document.getElementsByClassName("simple-button")[0].outerHTML}`
                )
              })
            }}
          >
            Click Here
          </button>
        }
        attributes={[
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Input
              label="Background Color"
              placeholder="eg.: #000000"
              onChange={(e) => {
                setBackgroundColor(e.target.value);
                setHtmlResult(
                  `${
                    document.getElementsByClassName("simple-button")[0]
                      .outerHTML
                  }`
                );
              }}
            />
            <Input
              label="Color"
              placeholder="eg.: #000000"
              onChange={(e) => {
                setHtmlResult(
                  `${
                    document.getElementsByClassName("simple-button")[0]
                      .outerHTML
                  }`
                );
                setColor(e.target.value);
              }}
            />
          </Box>,
        ]}
        sourceCode={htmlResult}
      />
    </>
  );
}

export default ButtonCustom;
