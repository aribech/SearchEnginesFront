import React, { Component } from 'react';

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Footer } from './Footer';

const useButtonStyle = makeStyles(
    {
        root : {
            //background : 'linear-gradient(45deg,#2F34FF,#F20320)',
            border : 0,
            borderRadius : 5,
            color :'gray',
            fontSize: 20,
            padding : '10px, 30px'
        }
    }
)

const useDivStyle = makeStyles(
    {
        root : {
            backgroundColor: '#1B2731',
            width:'1250px',
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
                > ACCUEIL
                </Typography>
         </div>)

}

function ButtonMoteursDeRecherche()
{
    const classes = useButtonStyle();
    return <Button className={classes.root}  size="large" href="/SearchEngines" > MOTEURS DE RECHERCHE</Button>
}
function ButtonGrpMoteursRecherche()
{
    const classes = useButtonStyle();
    return <Button className={classes.root} 
                
            > 
            GROUPES DE MOTEURS DE RECHERCHE</Button>
}
function ButtonReferentielGammes()
{
    const classes = useButtonStyle();
    return <Button className={classes.root} > REFERENTIEL DES GAMMES</Button>
}


const useDivBtn = makeStyles(
    {
        root : {
            backgroundColor : '#F3F3F3',
            borderRadius : 15,
            width:'450px',
            height:'120px',
            display: 'flex',
            alignItems:'center',
        }
    }
)

function DivBtnMoteursDeRecherche()
{
    const classes = useDivBtn();
    return (<div className={classes.root}  >
                <img src="moteurs-de-recherche.PNG"></img>
               <ButtonMoteursDeRecherche></ButtonMoteursDeRecherche>
         </div>)
}
function DivBtnGrpMoteursDeRecherche()
{
    const classes = useDivBtn();
    return (<div className={classes.root} >
                <img src="grp-moteurs-de-recherche.png"></img>
               <ButtonGrpMoteursRecherche></ButtonGrpMoteursRecherche>
         </div>)
}
function DivBtnReferentielDesGammes()
{
    const classes = useDivBtn();
    return (<div className={classes.root} >
                <img src="ref-des-gammes.png"></img>
               <ButtonReferentielGammes></ButtonReferentielGammes>
         </div>)
}
export class Home extends Component{
    render()
    {
        return(
            <Container maxWidth="fluid"> 
                    <DivAccueil/>
    
                    <Grid container  >
                        <Grid item xs={4}><DivBtnMoteursDeRecherche></DivBtnMoteursDeRecherche></Grid>
                        <Grid item xs={4}> <DivBtnGrpMoteursDeRecherche></DivBtnGrpMoteursDeRecherche></Grid>
                        <Grid item xs={4}><DivBtnReferentielDesGammes></DivBtnReferentielDesGammes></Grid>
                     
                    </Grid>
            </Container>
            
         

        )
    }
}



