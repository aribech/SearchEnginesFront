import React, { Component,useState } from 'react';
import './NewSearchEngine.css';
import Button from "@material-ui/core/Button";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import SaveIcon from '@material-ui/icons/Save';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


//files
import {GeneralInfosForm} from './EngineGeneralnfos'
import { VisualManagement } from "./VisualManagement";
import { SearchManagement } from './SearchManagement';


function Titre()
{
    return (
                <Typography variant={"subtitle1"}
                      style={
                            {
                                fontSize: 20,
                                paddingTop:10, 
                                paddingBottom:10,
                                paddingLeft:10,
                            }
                        }
                > EDITION D'UN MOTEUR DE RECHERCHE:
                </Typography>
            )

}


function BackButton()
{
    return (

                <Button
                      style={{
                          color: 'white',
                          fontSize: 20
                      }}
                      startIcon={<ArrowBackIosRoundedIcon />}
                      href="/SearchEngines"
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
            fontSize: 23.5,
        }
    }
)
function ButtonShowngine()
{
    const classes = useButtonStyle();
    return <Button className={classes.root} href="/NewSearchEngine" startIcon={<VisibilityIcon />} 
                variant="contained" color="primary"
            > PRÉVISUALISER</Button>
}

function ButtonSaveEngine()
{
    const classes = useButtonStyle();
    return <Button className={classes.root} href="/NewSearchEngine" startIcon={<SaveIcon />} 
                variant="contained" color="primary"
            > ENREGISTRER</Button>
}





 
export class NewSearchEngine extends Component
{
    constructor() {
        super();
        this.state = {
          name: "New Search Engine",
          showHideGeneralInfo: true,
          showHideVisualManagement: false,
          showHideSearchManagement: false,
        };
        this.hideComponent = this.hideComponent.bind(this);
      }

    hideComponent(name) {
        console.log(name);
        switch (name) {
          case "showHideGeneralInfo":
            this.setState({ showHideGeneralInfo: !this.state.showHideGeneralInfo });
            break;
          case "showHideVisualManagement":
            this.setState({ showHideVisualManagement: !this.state.showHideVisualManagement });
            break;
          case "showHideSearchManagement":
            this.setState({ showHideSearchManagement: !this.state.showHideSearchManagement });
            break;
          default:
            this.setState({ showHideGeneralInfo: this.state.showHideGeneralInfo });;
        }
      }
    
    render()
    {
        const { showHideGeneralInfo, showHideVisualManagement,showHideSearchManagement} = this.state;
        return(
            <Container maxWidth="fluid"> 
                <div class="wrapper" >
                    <Grid container  >
                        <Grid item xs={1}><div class=" left"> <BackButton /></div> </Grid>
                        <Grid item xs={7}> <div class=" center"><Titre /></div> </Grid>
                        <Grid item xs={2}><div class=" right"><ButtonShowngine /></div> </Grid>
                        <Grid item xs={2}><div class=" right"><ButtonSaveEngine /></div> </Grid>
                    </Grid>
                </div>
               <div class="formBody">
                    <form  noValidate autoComplete="off">
                        <div class="secionHead">
                            <Button startIcon={<ExpandLessIcon />} 
                                onClick={() => this.hideComponent("showHideGeneralInfo")}
                                style = {{fontSize:20, }}
                                >
                             | INFORMATIONS GENERALES
                            </Button>  
                            
                        </div>

                        { showHideGeneralInfo && <GeneralInfosForm /> }

                        <div class="secionHead">
                            <Button startIcon={<ExpandLessIcon />} 
                                onClick={() => this.hideComponent("showHideVisualManagement")}
                                style = {{fontSize:20, }}
                                >
                             | GESTION DU VISUEL
                            </Button>  
                            
                        </div>

                        { showHideVisualManagement && <VisualManagement /> }

                        <div class="secionHead">
                            <Button startIcon={<ExpandLessIcon />} 
                                onClick={() => this.hideComponent("showHideSearchManagement")}
                                style = {{fontSize:20, }}
                                >
                             | GESTION DES CRITERES DE RECHERCHE
                            </Button>  
                            
                        </div>

                        { showHideSearchManagement && <SearchManagement /> }
                   </form>
               </div>
            </Container>
        )
    }
}