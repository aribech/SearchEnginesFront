import React, { Component ,useState, useEffect} from 'react';
import { connect } from "react-redux";
import * as actions from "./actions/engine";
import './SearchEngines.css';
import Button from "@material-ui/core/Button";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Typography from "@material-ui/core/Typography";
import {makeStyles, withStyles} from "@material-ui/core/styles";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const StyledTableCell = withStyles((theme) => ({
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

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

function Titre()
{
  
    return (
                <Typography variant={"subtitle1"}
                      style={
                            {
                                fontSize: 30,
                                paddingTop:10, 
                                paddingBottom:10,
                                paddingLeft:10,
                            }
                        }
                > GESTION DES MOTEURS DE RECHERCHE
                </Typography>
            )

}


const useDivBtnBack = makeStyles(
    {
        root : {
            backgroundColor: '#1B2731',
            width:'100px',
            height:'80px',
            marginBottom:'25px',
            marginTop:'100px',
            color:'white',
            marginLeft:'1.5rem',
        }
    }
)

function BackButton()
{
    const classes = useDivBtnBack();
    return (

                <Button
                      style={{
                          color: 'white',
                          fontSize: 20
                      }}
                      startIcon={<ArrowBackIosRoundedIcon />}
                      href="/Home"
                    >
                        Back
                    </Button>
            )
}


const useButtonStyle = makeStyles(
    {
        root : {
            
            borderRadius : 10,
            color :'white',
            fontSize: 17.5,
            textAlign:'left',
        }
    }
)

function ButtonCreateEngine()
{
    const classes = useButtonStyle();
    return <Button className={classes.root} href="/NewSearchEngine" startIcon={<AddBoxIcon />} 
                variant="contained" color="primary"
            > CREER UN MOTEUR DE RECHERCHE</Button>
}


const SearchEngines = ({ classes, ...props }) => {

    useEffect(() => {
        props.fetchAllEngines()
    }, [])//componentDidMount
   
        return(
            <Container maxWidth="fluid"> 
                <div class="wrapper" >
                    <Grid container direction="row">
                        <Grid item xs={1}><div class=" left"> <BackButton /></div> </Grid>
                        <Grid item xs={9}> <div class=" center"><Titre /></div> </Grid>
                        <Grid item xs={2}><ButtonCreateEngine /></Grid>
                    </Grid>
                </div>
                <Grid container>
                <TableContainer>
                        <Table>
                            <TableHead >
                                <TableRow>
                                    <StyledTableCell align="left">GAMMES</StyledTableCell>
                                    <StyledTableCell align="left">ID</StyledTableCell>
                                    <StyledTableCell align="left">NOM</StyledTableCell>
                                    <StyledTableCell align="left">DERNIERE MODIF</StyledTableCell>
                                    <StyledTableCell align="left">STATUT</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.EngineList.map((record, index) => {
                                        return (<TableRow key={index} hover>
                                            <StyledTableCell align="left">{record.name}</StyledTableCell>
                                            <StyledTableCell align="left">{record.code}</StyledTableCell>
                                            <StyledTableCell align="left">{record.name}</StyledTableCell>
                                            <StyledTableCell align="left">{record.name}</StyledTableCell>
                                            <StyledTableCell align="left">{record.name}</StyledTableCell>

                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Container>
        )
}

const mapStateToProps = state => ({
    EngineList: state.engine.list
})

const mapActionToProps = {
    fetchAllEngines: actions.fetchAll,
}

export default connect(mapStateToProps, mapActionToProps)(SearchEngines);