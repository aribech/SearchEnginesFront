import React, { Component } from 'react';
import './SearchEngines.css';
import Button from "@material-ui/core/Button";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

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


export class SearchEngines extends Component
{
    render()
    {
        return(
            <Container maxWidth="fluid"> 
                <div class="wrapper" >
                <Grid container>
                    <Grid item xs={1}><div class=" left"> <BackButton /></div> </Grid>
                    <Grid item xs={9}> <div class=" center"><Titre /></div> </Grid>
                    <Grid item xs={2}><ButtonCreateEngine /></Grid>
                </Grid>
                </div>
               </Container>
        )
    }
}