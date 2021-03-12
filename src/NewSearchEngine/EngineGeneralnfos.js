import React from 'react';
import './NewSearchEngine.css';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import InputLabel from '@material-ui/core/InputLabel';

const GreenSwitch = withStyles((theme) => ({
    switchBase: {
      color: green[150],
      '&$checked': {
        color: green[300],
        '&:hover': {
          backgroundColor: green[300],
        },
      },
      '&$checked + $track': {
        backgroundColor: green[300],
      },
    },
    checked: {},
    track: {},
  }))(Switch);

export function GeneralInfosForm()
{
    
    return <div class="generalInfosForm">
             <p class="grayText">MOTEUR DE RECHERCHE</p>
             <Grid container direction="row">
                <Grid item xs={3}>
                  <InputLabel htmlFor="EngineName">NOM DU MOTEUR</InputLabel>
                  <TextField
                        required
                        id="EngineName"
                        name="EngineName"
                        variant="outlined" fullWidth

                  />
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                  <InputLabel htmlFor="ActiveEngine">NOM DU MOTEUR</InputLabel>
                    <GreenSwitch
                          id="ActiveEngine"
                          name="ActiveEngine"
                    />
                </Grid>
                <Grid item xs={3}>
                  <InputLabel htmlFor="EngineCode">ID MOTEUR</InputLabel>
                    <TextField
                          required
                          id="EngineCode"
                          name="EngineCode"
                          variant="outlined" fullWidth
                    />
                </Grid>
             </Grid>
        
    </div>
}
