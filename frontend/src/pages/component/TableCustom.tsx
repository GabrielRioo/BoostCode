import React, { useEffect, useState } from "react";
import ComponentsPage from "../../components/ContentPage";
import ComponentAttributes from "../../components/ComponentAttributes";
import CustomButton from "../../components/custom/CustomButton";
import { Box } from "@mui/material";
import Input from "../../components/Input";

function TableCustom(props: any) {
  const [attribute, setAttribute] = useState("");
  const [htmlResult, setHtmlResult] = useState("");

  useEffect(() => {
    setHtmlResult(
      `${document.getElementsByClassName("simple-button")[0].outerHTML}`
    );
  }, []);

  return (
    <>
      <ComponentsPage
        title="Table"
        component={
          <CustomButton id="teste" color="white" backgroundColor={attribute}>
            Click Here
          </CustomButton>
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
                // setBackgroundColor(e.target.value);
                setHtmlResult(
                  `${
                    document.getElementsByClassName("simple-button")[0]
                      .outerHTML
                  }`
                );
              }}
            />
          </Box>,
        ]}
        sourceCode={htmlResult}
      />
    </>
  );
}

export default TableCustom;
