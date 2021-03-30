import React from "react";
import styled from "styled-components";

import { Button,DialogTitle,DialogContent,DialogActions, TableCell, withStyles } from "@material-ui/core";

export const HeadDiv = styled.div({
  marginTop: "5rem",
});

export const PageTitle = styled.h4({
  marginTop: "0px",
  padding: "5px",
  width: "100%",
  backgroundColor: "#1B2731",
  borderRadius: 5,
});

export const ButtonBack = styled(Button)({
  color: "white",
  fontSize: 20,
  fontWeight: "bold",
  padding: "5px",
  width: "100%",
  backgroundColor: "#1B2731",
});

export const ButtonCreateEngine = styled(Button)({
  color: "white",
  borderRadius: 10,
  width: "100%",
  backgroundColor: "#2EBBEE",
  ":hover": {
    backgroundColor: "#0D6CE4",
  },
});

export const DivBody = styled.div({
  backgroundColor: "lightgrey",
  padding: "3rem",
  marginTop: "5px",
});

export const DeleteButton = styled(Button)({
  backgroundColor:"#FF5E32",
  borderRadius:10,
  marginBottom:5,
  color:"dark",
  ":hover": {
    backgroundColor: "#FF2100",
  },
})
export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
}))(TableCell);

export const DTitle = styled(DialogTitle)({
  color: "dark",
  fontSize: 20,
  fontWeight: "bold",
  textAlign:"center",
  backgroundColor: "#CAD5E4",
});

export const DActions = styled(DialogActions)({
  color: "dark",
  fontSize: 20,
  fontWeight: "bold",
  backgroundColor: "#CAD5E4",
});

export const DContent = styled(DialogContent)({
  color: "darkgray",
  textAlign:"center",
  height:"15rem",
  width:"30rem"
});
