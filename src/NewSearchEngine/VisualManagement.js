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


  const PreviewUseStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '100%',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '20ch',
          },
    },
    
  }));

function PreviewDiv()
{
    const classes = PreviewUseStyles();
    return(
        <div class="previwDiv">
            <FormControl className={classes.root} component="fieldset">
                    <FormGroup aria-label="position" row>
                        
                                <FormControlLabel id="labelForm"
                                    control={ <TextField
                                                required
                                                id="outlined-basic"
                                                variant="outlined"
                                            /> }
                                    label="APERCU PC"
                                    labelPlacement="top"
                                />
                                <FormControlLabel id="labelForm"
                                    control={ <TextField
                                                required
                                                id="outlined-basic"
                                                variant="outlined"
                                            /> }
                                    label="APERCU MOBILE"
                                    labelPlacement="top"
                                />
                                 
                                  
                    </FormGroup>
            </FormControl>
        </div>
    )
}

const FormControluseStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '100%',
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '30ch',
          },
    },
    
  }));

  function VisualForm()
  {
      const classes = FormControluseStyles();
      return(
          <div class="previwDiv">
              <FormControl className={classes.root} component="fieldset">
                      <FormGroup aria-label="position" row>
                          
                                  <FormControlLabel id="labelForm"
                                      control={ <TextField
                                                  required
                                                  id="outlined-basic"
                                                  variant="outlined"
                                              /> }
                                      label="URL IMAGES PC"
                                      labelPlacement="top"
                                  />
                                  <FormControlLabel id="labelForm"
                                      control={ <TextField
                                                  required
                                                  id="outlined-basic"
                                                  variant="outlined"
                                              /> }
                                      label="LIEN PC"
                                      labelPlacement="top"
                                  />
                        </FormGroup>
                        <FormGroup aria-label="position" row>
                          
                                  <FormControlLabel id="labelForm"
                                      control={ <TextField
                                                  required
                                                  id="outlined-basic"
                                                  variant="outlined"
                                              /> }
                                      label="URL IMAGES MOBILE"
                                      labelPlacement="top"
                                  />
                                  <FormControlLabel id="labelForm"
                                      control={ <TextField
                                                  required
                                                  id="outlined-basic"
                                                  variant="outlined"
                                              /> }
                                      label="LIEN MOBILE"
                                      labelPlacement="top"
                                  />
                        </FormGroup>
                        <FormGroup aria-label="position" row>
                          
                                  <FormControlLabel id="labelForm"
                                      control={ <TextField
                                                  required
                                                  id="outlined-basic"
                                                  variant="outlined"
                                              /> }
                                      label="ALT"
                                      labelPlacement="top"
                                  />
                                  <FormControlLabel id="labelForm"
                                      control={ <GreenSwitch /> }
                                      label="OUVRIR DANS NOUVEL ONGLET"
                                      labelPlacement="top"
                                  />
                                   <FormControlLabel id="labelForm"
                                      control={ <GreenSwitch /> }
                                      label="ACTIVE"
                                      labelPlacement="top"
                                  />
                        </FormGroup>
              </FormControl>
          </div>
      )
  }
  

export function VisualManagement()
{
  
    return(
        <div>
            <p class="grayText">SLIDER D'IMAGES DE FOND</p>
            <Grid container  >
                        <Grid item xs={3}><PreviewDiv /></Grid>
                        <Grid item xs={9}> <VisualForm /> </Grid>
            </Grid>
        </div>
    )
}