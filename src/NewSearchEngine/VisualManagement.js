import React from 'react';
import './NewSearchEngine.css';
import {makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import InputLabel from '@material-ui/core/InputLabel';
const GreenSwitch = withStyles((theme) => ({
    switchBase: {
      color: green[200],
      '&$checked': {
        color: green[800],
        '&:hover': {
          backgroundColor: green[700],
        },
      },
      '&$checked + $track': {
        backgroundColor: green[400],
      },
    },
    checked: {},
    track: {},
  }))(Switch);



const formControlLabelUseStyle = makeStyles((theme) => ({
    root:{
         color:'black',
         marginTop:30,
         
    }
}));

function PreviewDiv()
{
    const classFormLabel = formControlLabelUseStyle();
    return(
        <div class="previwDiv">
            <InputLabel className={classFormLabel.root} htmlFor="PrevPC">APERCU PC</InputLabel>
                  <TextField
                        required
                        id="PrevPC"
                        name="PrevPC"
                        variant="outlined" fullWidth

                  />

            <InputLabel className={classFormLabel.root} htmlFor="PrevMobile">APERCU MOBILE</InputLabel>
                  <TextField
                        required
                        id="PrevMobile"
                        name="PrevMobile"
                        variant="outlined" fullWidth

                  />
            
        </div>
    )
}

const FormControluseStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '100%',
        '& .MuiTextField-root': {
            width: '30ch',
          },
    },
    
  }));

  function VisualForm()
  {
      const classFormLabel = formControlLabelUseStyle();
      return(
          <div class="visualFormDiv">

            <Grid container direction="row">
                <Grid item xs={4}>
                  <InputLabel className={classFormLabel.root} htmlFor="UrlImgPC">URL IMAGE PC</InputLabel>
                  <TextField
                        required
                        id="UrlImgPC"
                        name="UrlImgPC"
                        variant="outlined" fullWidth

                  />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4}>
                  <InputLabel className={classFormLabel.root} htmlFor="UrlPC">LIEN PC</InputLabel>
                    <TextField
                          required
                          id="UrlPC"
                          name="UrlPC"
                          variant="outlined" fullWidth
                    />
                </Grid>
             </Grid>
             <Grid container direction="row">
                <Grid item xs={4}>
                  <InputLabel className={classFormLabel.root} htmlFor="UrlImgMobile">URL IMAGE MOBILE</InputLabel>
                  <TextField
                        required
                        id="UrlImgMobile"
                        name="UrlImgMobile"
                        variant="outlined" fullWidth

                  />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4}>
                  <InputLabel className={classFormLabel.root} htmlFor="UrlMobile">LIEN MOBILE</InputLabel>
                    <TextField
                          required
                          id="UrlMobile"
                          name="UrlMobile"
                          variant="outlined" fullWidth
                    />
                </Grid>
             </Grid>
             <Grid container direction="row">
                <Grid item xs={4}>
                  <InputLabel className={classFormLabel.root} htmlFor="Alt">ALT</InputLabel>
                  <TextField
                        required
                        id="Alt"
                        name="Alt"
                        variant="outlined" fullWidth

                  />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                  <InputLabel className={classFormLabel.root} htmlFor="OpenNewOng">OUVRIR DANS NOUVEL ONGLET</InputLabel>
                    <GreenSwitch
                          id="OpenNewOng"
                          name="OpenNewOng"
                    />
                </Grid>
                <Grid item xs={3}>
                  <InputLabel className={classFormLabel.root} htmlFor="ImgActive">ACTIVE</InputLabel>
                    <GreenSwitch
                          id="ImgActive"
                          name="ImgActive"
                          defaultChecked='true'
                    />
                </Grid>
             </Grid>
        </div>
      )
  }
  

  const FormMarketingUseStyles = makeStyles((theme) => ({
    root: {
       
        width: '100%',
    },
    
  }));

  function VisualFormMarketing()
  {
    const classes = FormMarketingUseStyles();
    const classFormLabel = formControlLabelUseStyle();
    return(
        <div class="MarketingDiv">
            <Grid container direction="row">
                <Grid item xs={7}>
                  <InputLabel className={classFormLabel.root} htmlFor="MarketingText">TEXTE DE L'ACCROCHE MARKETING</InputLabel>
                  <TextField
                        required
                        id="MarketingText"
                        name="MarketingText"
                        multiline
                        rows={4}
                        variant="outlined" fullWidth

                  />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4}>
                    <InputLabel className={classFormLabel.root} htmlFor="MarketingTextActive">ACTIVE</InputLabel>
                    <GreenSwitch
                            id="MarketingTextActive"
                            name="MarketingTextActive"
                    />
                </Grid>
            </Grid>
            <Grid container direction="row">
                <Grid item xs={6}>
                  <InputLabel className={classFormLabel.root} htmlFor="SearchButtonText">TEXTE DU BOUTON RECHERCHE</InputLabel>
                  <TextField
                        required
                        id="MarketingText"
                        name="MarketingText"
                        variant="outlined" 
                    />
                </Grid>
            </Grid>
        </div>
    )
  }

export function VisualManagement()
{
  
    return(
            <div class="visualManagementDiv" >
            <p class="grayText">SLIDER D'IMAGES DE FOND</p>
            <Grid container direction="row" >
                        <Grid item xs={3}><PreviewDiv /></Grid>
                        <Grid item xs={9}> <VisualForm /> </Grid>
            </Grid>
            
            <VisualFormMarketing />
            </div>
    )
}