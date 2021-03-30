import React, { Component,useState, useEffect } from "react";
import {
  CheckCircle as CheckCircleIcon,
  HighlightOff as HighlightOffIcon,
  Delete as DeleteIcon,
  AddBox as AddBoxIcon,
  ArrowBackIosRounded as ArrowBackIosRoundedIcon,
} from "@material-ui/icons";

import {
  Checkbox,
  Container,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";

import { isNilOrEmpty } from "ramda-adjunct";

import { connect } from "react-redux";

import * as actions from "../../actions/engine";

import {
  ButtonBack,
  ButtonCreateEngine,
  DeleteButton,
  DivBody,
  HeadDiv,
  StyledTableCell,
  PageTitle,
} from "./style";

const renderSearchEngineListHead = () => {
  return (
    <HeadDiv>
      <Grid container direction="row" spacing="2">
        <Grid item xs={1}>
          <ButtonBack startIcon={<ArrowBackIosRoundedIcon />} href="/Home">
            BACK
          </ButtonBack>
        </Grid>
        <Grid item xs={8}>
          <PageTitle>GESTION DES MOTEURS DE RECHERCHE</PageTitle>
        </Grid>
        <Grid item xs={3}>
          <ButtonCreateEngine
            href="/NewSearchEngine"
            startIcon={<AddBoxIcon />}
          >
            CREER UN MOTEUR DE RECHERCHE
          </ButtonCreateEngine>
        </Grid>
      </Grid>
    </HeadDiv>
  );
};

const TableHeadRow = () => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell padding="checkbox">
          <Checkbox style={{ color: "white" }} />
        </StyledTableCell>
        <StyledTableCell align="left">GAMMES</StyledTableCell>
        <StyledTableCell align="left">ID</StyledTableCell>
        <StyledTableCell align="left">NOM</StyledTableCell>
        <StyledTableCell align="left">DERNIERE MODIF</StyledTableCell>
        <StyledTableCell align="left">STATUT</StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

const SerchEngineStatus = (isEnable) => {
  if (isEnable)
    return (
      <Typography style={{ color: "green" }}>
        <CheckCircleIcon /> ACTIF
      </Typography>
    );
  else
    return (
      <Typography style={{ color: "red" }}>
        <HighlightOffIcon /> INACTIF
      </Typography>
    );
};

export class SearchEngines extends Component {
    constructor() {
        super();
        this.state={
            Engines:[],
            IndexToDelete:-1,
        };
        this.setState({ Engines: actions.fetchAll() });
        this.DeleteEngineSelected = this.DeleteEngineSelected.bind(this);
    }
    componentDidMount()
    {
        this.setState({ Engines: actions.fetchAll });
    }
    componentDidUpdate()
    {
      this.setState({ Engines: actions.fetchAll });
    }

   DeleteEngineSelected = () => {
    console.log("test delete1");
    const EngineCode = this.state.Engines[this.state.IndexToDelete].Code;
    actions.Delete(EngineCode, (message) => {
      window.alert(message);
    });
  };

  render()
  {
    const {
      Engines,
      IndexToDelete,
    } = this.state;
    return (
        <Container maxWidth="fluid">
          {renderSearchEngineListHead()}
          <DivBody>
            <Grid container direction="row">
              <Grid item xs={3}>
                <DeleteButton
                  endIcon={<DeleteIcon />}
                  onClick={this.DeleteEngineSelected}
                  variant="contained"
                >
                  Supprimer les moteurs selectionés
                </DeleteButton>
              </Grid>
            </Grid>
            <Grid container>
              <TableContainer>
                <Table>
                  <TableHeadRow></TableHeadRow>
                  <TableBody>
                    {!isNilOrEmpty(Engines) &&
                      Engines.map((record, index) => {
                        const { Name, Code, lastUpdate, isEnable } = record;
                        return (
                          <TableRow key={index} hover>
                            <StyledTableCell padding="checkbox">
                              <Checkbox onChange={() => this.setState({ IndexToDelete: index })} />
                            </StyledTableCell>
                            <StyledTableCell align="left">{Name}</StyledTableCell>
                            <StyledTableCell align="left">{Code}</StyledTableCell>
                            <StyledTableCell align="left">{Name}</StyledTableCell>
                            <StyledTableCell align="left">
                              {lastUpdate}
                            </StyledTableCell>
                            <StyledTableCell align="left">
                              {SerchEngineStatus(isEnable)}
                            </StyledTableCell>
                          </TableRow>
                        );
                      })
                    }
                    {isNilOrEmpty(this.state.Engnies) && (
                      <StyledTableCell align="center" colSpan="6">
                        Aucun resultat
                      </StyledTableCell>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </DivBody>
        </Container>
      );
  }

  
}

export default SearchEngines;