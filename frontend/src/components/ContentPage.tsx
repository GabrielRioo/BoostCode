import {
  Box,
  InputLabel,
  Select,
  FormControl,
  IconButton,
  MenuItem,
  Icon,
  Menu,
  Button as ButtonMUI,
  Tooltip as TooltipMUI,
} from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useEffect, useRef, useState } from "react";
import {
  Form,
  Overlay,
  Tooltip as TooltipReact,
  Button as ButtonReact,
} from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Input from "./Input";
import ShareIcon from '@mui/icons-material/Share';
import Fade from '@mui/material/Fade';

function ComponentsPage(props: any) {
  console.log("props", props);
  const [htmlResult, setHtmlResult] = useState("");
  useEffect(() => {
    setHtmlResult(`${document.getElementById("botao-teste")?.outerHTML}`);
  }, []);

  const [color, setColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [padding, setPadding] = useState("");
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [age, setAge] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [teste, setTeste] = React.useState(false);
  const [enable, setEnable] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  function AppendAttribute() {
    setTeste(true)
    setEnable(true)
    handleClose()
  }
  // useEffect(() => {
  //   setHtmlResult(
  //     `${document.getElementsByClassName("simple-button")[0].outerHTML}`
  //   );
  // }, []);

  function handleOnChange() {
    setHtmlResult(
      `${document.getElementsByClassName("simple-button")[0].outerHTML}`
    );
  }
  return (
    <>
    <div className="header">
      <h1 className="title-principal">{props.title}</h1>
      <div>
        <TooltipMUI
          title="compartilhar"
          placement="right"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <IconButton aria-label="share" sx={{marginTop: '8px', marginLeft: '8px'}}>
            <ShareIcon />
          </IconButton>
        </TooltipMUI>
      </div>
      </div>
      <div className="box-content">
        {props.component}
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="css-component">{props.attributes}</div>
        </Form.Group>

        {teste &&  <Input label="Background Color" placeholder="eg.: #000000" onChange={(e) => { setBackgroundColor(e.target.value); setHtmlResult(`${document.getElementsByClassName("simple-button")[0].outerHTML}`);}}/>}

        {/* Selecionar mais propriedades */}
        <div>
          
          
          <ButtonMUI
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="success"
          >
            <AiOutlinePlusSquare style={{ fontSize: 50 }} />
          </ButtonMUI>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <TooltipMUI
              title="espaçamento interno"
              placement="right"
              followCursor
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <MenuItem disabled={enable} onClick={() => AppendAttribute()}>Padding</MenuItem>
            </TooltipMUI>
            <TooltipMUI
              title="espaçamento externo"
              placement="right"
              followCursor
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <MenuItem  disabled={enable} onClick={() => AppendAttribute()}>Margin</MenuItem>
            </TooltipMUI>
            <TooltipMUI
              title="largura, cor e tipo de borda"
              placement="right"
              followCursor
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
            >
              <MenuItem  disabled={enable} onClick={() => AppendAttribute()}>Border</MenuItem>
            </TooltipMUI>
            
          </Menu>
        </div>
      </div>

      {/* Amostragem do código fonte do componente */}
              

      <div className="code-content">
        <div>
          <ButtonReact
            size="sm"
            variant="outline-light"
            ref={target}
            onClick={() => {
              navigator.clipboard.writeText(htmlResult);
              setShow(!show);
              setTimeout(() => {
                setShow(false);
              }, 1000);
            }}
          >
            Copy
          </ButtonReact>
          <Overlay target={target.current} show={show} placement="left">
            {(props) => (
              <TooltipReact id="overlay-example" {...props}>
                Copied
              </TooltipReact>
            )}
          </Overlay>
        </div>

        <code>
          {/* <pre>{`${document.getElementsByClassName('input-items')[0].outerHTML}`}</pre> */}
          <TrackVisibility>
            <pre>{`${props.sourceCode}`}</pre>
          </TrackVisibility>
        </code>
      </div>
    </>
  );
}

export default ComponentsPage;
