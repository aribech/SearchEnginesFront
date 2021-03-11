import React from 'react';
import './NewSearchEngine.css';
import {makeStyles} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

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

const FormontroluseStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export function GeneralInfosForm()
{
    
    const classes = FormontroluseStyles();
    return <div class="generalInfosForm">
        <p class="grayText">MOTEUR DE RECHERCHE</p>
        <div>
            <FormControl className={classes.root} component="fieldset">
                <FormGroup aria-label="position" row>
               
                            <FormControlLabel id="labelForm"
                                control={ <TextField
                                            required
                                            id="outlined-basic"
                                            variant="outlined"
                                        /> }
                                label="NOM DU MOTEUR"
                                labelPlacement="top"
                            />
                            <FormControlLabel id="labelForm"
                                control={<GreenSwitch  />}
                                label="MOTEUR ACTIVE"
                                labelPlacement="top"
                            />
                            <FormControlLabel id="labelForm"
                                control={ <TextField
                                            id="outlined-number"
                                            variant="outlined"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        /> }
                                label="ID MOTEUR"
                                labelPlacement="top"
                            />
                </FormGroup>
            </FormControl>
        </div>
    </div>
}
