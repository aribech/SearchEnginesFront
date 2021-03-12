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
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
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

  const InputStyle = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '100%',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '20ch',
          },
    },
    
  }));

  const formControlLabelUseStyle = makeStyles((theme) => ({
    root:{
         color:'gray',
    }
}));


export function SearchManagement()
{
    return(
      <div class="SearchManagementDiv">
        <Grid container direction="row" >
                        <Grid item xs={6}>
                        <InputLabel htmlFor="select">Age</InputLabel>
                          <NativeSelect id="select">
                            <option value="10">Ten</option>
                            <option value="20">Twenty</option>
                          </NativeSelect>
                        </Grid>
                        <Grid item xs={6}> </Grid>
        </Grid>
      </div>
    )
}