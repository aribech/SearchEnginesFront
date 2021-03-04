import React, { Component } from 'react';
import './SearchEngines.css';
import Button from "@material-ui/core/Button";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useDivStyle = makeStyles(
    {
        root : {
            backgroundColor: '#1B2731',
            width:'1100px',
            height:'80px',
            marginBottom:'25px',
            marginTop:'100px',
            color:'white',
            marginLeft:'1.5rem',
        }
    }
)

function DivAccueil()
{
    const classes = useDivStyle();
    return (<div className={classes.root} >
                <Typography variant={"h5"}
                      style={
                            {
                                fontSize: 40,
                                paddingTop:10, 
                                paddingLeft:6,
                            }
                        }
                > GESTION DES MOTEURS DE RECHERCHE
                </Typography>
         </div>)

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

function DivBackButton()
{
    const classes = useDivBtnBack();
    return (<div className={classes.root} >

                <Button
                      style={{
                          color: 'white',
                          fontSize: 15
                      }}
                      startIcon={<ArrowBackIosRoundedIcon />}
                    >
                        Back
                    </Button>

             </div>)
}


const useButtonStyle = makeStyles(
    {
        root : {
            //background : 'linear-gradient(45deg,#2F34FF,#F20320)',
            border : 0,
            borderRadius : 5,
            color :'white',
            fontSize: 20,
            padding : '10px, 30px'
        }
    }
)

function ButtonCreateEngine()
{
    const classes = useButtonStyle();
    return <Button className={classes.root}  startIcon={<AddBoxIcon />} 
                variant="contained" color="primary"
            > CREER UN MOTEUR DE RECHERCHE</Button>
}


export class SearchEngines extends Component
{
    render()
    {
        return(
            <Container maxWidth="fluid"> 
                <div class="wrapper" >

                    <div class="equal left"> <DivBackButton /></div>
                    <div class="equal center"><DivAccueil /></div>
                    <div class="equal right"><ButtonCreateEngine /></div>
                </div>
                   
               
            </Container>
        )
    }
}