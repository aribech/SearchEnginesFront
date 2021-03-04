
import React from 'react';

import Button from "@material-ui/core/Button";
import ExpandLessIcon from '@material-ui/icons/ExpandLess'; // ^ icon
import {makeStyles } from "@material-ui/core/styles";

import {grey} from "@material-ui/core/colors";
const footerContainer = makeStyles(
    {
        root : {
            backgroundColor : '#1B2731',
            bottom:0,
            position:'absolute',
            width:'100% !important',
            height:'70px !important',
            color:'white',
            
        }
    }
)

export function Footer()
{
    const classes = footerContainer();
    return (<div className={classes.root}  >
                <Button 
                    
                    href={'#'}
                    size="large"
                    style={
                        {
                            color: 'white',
                            paddingTop:20,
                            paddingLeft:20
                        }
                    }
                    startIcon={< ExpandLessIcon/>}
                >HAUT DE PAGE</Button>
         </div>)
}