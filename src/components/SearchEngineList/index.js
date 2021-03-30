import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import {
  CheckCircle as CheckCircleIcon,
  Close as CloseIcon,
  Create as CreateIcon,
  HighlightOff as HighlightOffIcon,
  Delete as DeleteIcon,
  AddBox as AddBoxIcon,
  ArrowBackIosRounded as ArrowBackIosRoundedIcon,
  Visibility as VisibilityIcon,
} from "@material-ui/icons";
import {
  Button,
  Checkbox,
  Container,
  Collapse,
  Dialog,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { isNilOrEmpty } from "ramda-adjunct";

import { connect } from "react-redux";

import * as actions from "../../actions/engine";

import {
  ButtonBack,
  ButtonCreateEngine,
  DActions,
  DContent,
  DeleteButton,
  DivBody,
  DTitle,
  HeadDiv,
  StyledTableCell,
  PageTitle,
} from "./style";
const redirectToSave = () =>
{
  <Redirect to={{
    pathname: "/NewSearchEngine",
    state: {
      actionType: "new",
    },
  }}></Redirect>
}
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
          <ButtonCreateEngine startIcon={<AddBoxIcon />} onClick={redirectToSave}>
            <Link
              to={{
                pathname: "/NewSearchEngine",
                state: {
                  actionType: "new",
                },
              }}
            >
              CREER UN MOTEUR DE RECHERCHE
            </Link>
          </ButtonCreateEngine>
        </Grid>
      </Grid>
    </HeadDiv>
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

const SearchEngines = ({ EngineList, fetchAllEngines }) => {
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetchAllEngines();
  }, [refresh]);

  const [open, setOpen] = React.useState(false); //for modal
  const [codesToDelete, setCodesToDelete] = useState([]);
  const [enginesNameToDelete, setEnginesNameToDelete] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [allRowsSelected, setAllRowsSelected] = useState(false);
  const [rowSelected, setRowSelected] = useState(0);
  const [alertMessage, setAlertMessage] = useState([]);

  //for pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const TableHeadRow = () => {
    return (
      <TableHead>
        <TableRow>
          <StyledTableCell padding="checkbox">
            <Checkbox
              defaultChecked={
                rowSelected == EngineList.length || allRowsSelected
              }
              style={{ color: "white" }}
            />
          </StyledTableCell>
          <StyledTableCell align="left"></StyledTableCell>
          <StyledTableCell align="left">GAMMES</StyledTableCell>
          <StyledTableCell align="left">ID</StyledTableCell>
          <StyledTableCell align="left">NOM</StyledTableCell>
          <StyledTableCell align="left">DERNIERE MODIF</StyledTableCell>
          <StyledTableCell align="left">STATUT</StyledTableCell>
        </TableRow>
      </TableHead>
    );
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hadleHeadCheckBox = (e) => {
    if (e.target.checked) {
      setAllRowsSelected(true);
    } else {
      setAllRowsSelected(false);
    }
  };

  const handleCheckBoxChange = (code, e) => {
    if (e.target.checked) {
      setRowSelected(rowSelected + 1);
      setCodesToDelete((codesToDelete) => [...codesToDelete, code]);

      const name = EngineList.find((item) => item.Code === code).Name;
      setEnginesNameToDelete((enginesNameToDelete) => [
        ...enginesNameToDelete,
        name,
      ]);
      console.log("name :" + name);
    } else {
      setAllRowsSelected(false);
      setRowSelected(rowSelected - 1);

      setCodesToDelete((codesToDelete) =>
        codesToDelete.filter((item) => item !== code)
      );
      const name = EngineList.find((item) => item.Code === code).Name;
      setEnginesNameToDelete((enginesNameToDelete) =>
        enginesNameToDelete.filter((item) => item !== name)
      );
    }
  };

  const DeleteEngineSelected = () => {
    if (codesToDelete.length > 0) {
      setAlertMessage(enginesNameToDelete);
      codesToDelete.forEach((item) => {
        actions.Delete(item, () => {
          setRefresh(!refresh);
        });
      });

      setCodesToDelete([]);
      setOpen(false);
      setOpenAlert(true);
      setEnginesNameToDelete([]);
    }
  };

  const renderRedirect = () => {
    return <Redirect to="/NewSearchEngine" />;
  };

  return (
    <Container maxWidth="fluid">
      {renderSearchEngineListHead()}
      <Grid container direction="row">
        <Grid item xs={12}>
          <Collapse in={openAlert}>
            <Alert
              variant="filled"
              severity="warning"
              action={
                <IconButton
                  aria-label="close"
                  size="small"
                  onClick={() => {
                    setOpenAlert(false);
                  }}
                >
                  <CloseIcon />
                </IconButton>
              }
            >
              VOUS AVEZ SUPPRIMÉ(S) LE(S) MOTEUR(S) : {alertMessage}
            </Alert>
          </Collapse>
        </Grid>
      </Grid>
      <DivBody>
        <Grid container direction="row">
          <Grid item xs={3}>
            <DeleteButton
              endIcon={<DeleteIcon />}
              onClick={handleOpen}
              variant="contained"
              disabled={rowSelected == 0}
            >
              Supprimer les moteurs selectionés
            </DeleteButton>
            <Dialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DTitle id="customized-dialog-title" onClose={handleClose}>
                SUPPRESSION DE {codesToDelete}
              </DTitle>
              <DContent dividers>
                <Typography gutterBottom>
                  CONFIRMER-VOUS LA SUPPRESSION DE {enginesNameToDelete} ?
                </Typography>
              </DContent>
              <DActions>
                <Button autoFocus onClick={handleClose} variant="contained">
                  NON, ANNULER
                </Button>
                <DeleteButton
                  endIcon={<DeleteIcon />}
                  onClick={DeleteEngineSelected}
                  variant="contained"
                >
                  OUI, SUPPRIMER
                </DeleteButton>
              </DActions>
            </Dialog>
          </Grid>
        </Grid>
        <Grid container>
          <TableContainer>
            <TablePagination
              labelRowsPerPage="Résultat par page"
              nextIconButtonText="Page suivante"
              backIconButtonText="Page précédente"
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={EngineList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
            <Table>
              <TableHeadRow></TableHeadRow>
              <TableBody>
                {!isNilOrEmpty(EngineList) &&
                  EngineList.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  ).map((record, index) => {
                    const { Name, Code, lastUpdate, isEnable } = record;
                    return (
                      <TableRow key={index} hover>
                        <StyledTableCell padding="checkbox">
                          <Checkbox
                            defaultChecked={allRowsSelected}
                            onChange={(e) => handleCheckBoxChange(Code, e)}
                          />
                        </StyledTableCell>
                        <StyledTableCell align="left">
                          <IconButton aria-label="modifier">
                            <Link
                              to={{
                                pathname: "/NewSearchEngine",
                                state: {
                                  engineToUpdate: record,
                                  actionType: "update",
                                },
                              }}
                            >
                              <CreateIcon />
                            </Link>
                          </IconButton>
                          <IconButton aria-label="prévisualiser">
                            <VisibilityIcon />
                          </IconButton>
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
                  })}
                {isNilOrEmpty(EngineList) && (
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
};

const mapStateToProps = (state) => ({
  EngineList: state.engine.list,
});

const mapActionToProps = {
  fetchAllEngines: actions.fetchAll,
};

export default connect(mapStateToProps, mapActionToProps)(SearchEngines);
