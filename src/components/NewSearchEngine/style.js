
import styled from "styled-components";

import { Switch, Button,Select,InputLabel } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

export const GreenSwitch = withStyles((theme) => ({
  switchBase: {
    color: green[200],
    "&$checked": {
      color: green[800],
      "&:hover": {
        backgroundColor: green[700],
      },
    },
    "&$checked + $track": {
      backgroundColor: green[400],
    },
  },
  checked: {},
  track: {},
}))(Switch);

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

export const ButtonStyled = styled(Button)({
  color: "white",
  borderRadius: 10,
  width: "100%",
  backgroundColor: "#2EBBEE",
  ":hover":{
    backgroundColor: "#0D6CE4",
  }
});

export const InputLabelStyled=styled(InputLabel)({
  margin:"8px 5px 5px 5px",
})

export const DivCenter = styled.div({
  textAlign: "center",
});

export const LabelStyled = styled.label({
  color: "gray",
  fontSize: 20,
});
export const SelectStyled = styled(Select)({
  borderRadius: 5,
  borderStyle: "solid",
  borderColor: "lightgray",
  width: "100%",
});
export const PageBody = styled.div({
  backgroundColor: "lightgrey",
  marginTop: "5px",
  height: "100%",
  width: "100%",
  padding: "10px",
});

export const GeneralInfos = styled.div({
  backgroundColor: "white",
  borderRadius: "20px",
  height: "100%",
  paddingLeft: "5rem",
  paddingBottom: "10px",
});

export const PreviewDiv = styled.div({
  backgroundColor: "white",
  margin: "8px",
  height: "100%",
  borderRadius: "20px",
  paddingLeft: "10px",
});

export const MarketingDiv = styled.div({
  backgroundColor: "white",
  margin: "25px 8px 8px 8px",
  height: "100%",
  borderRadius: "20px",
  padding: "0 0 10px 10px",
});

export const SearchManagementHead = styled.div({
  backgroundColor: "white",
  width: "100%",
  borderRadius: " 20px",
  margin: "8px",
  padding: "8px",
});
