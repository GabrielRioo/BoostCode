import { styled, TextField } from "@mui/material";
import React from "react";

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

function Input(props: any) {
  const {...rest} = props;

  return (
    <CssTextField
      id="custom-css-outlined-input"
      label={props.label}
      placeholder={props.placeholder}
      size="small"
      color="warning"
      multiline
     {...rest}
    />
  );
}

export default Input;
