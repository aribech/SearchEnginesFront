import React from 'react';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpandLessIcon from '@material-ui/icons/ExpandLess'; // ^ icon
import { withStyles } from '@material-ui/core/styles';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';



const StyledMenu = withStyles({
    paper: {
      border: '0px solid #d3d4d5',
      backgroundColor :'#1B2731',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
      color :'#6C747B',
    },
  }))(MenuItem);



export function NavBar()
{
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar style={{
            backgroundColor:'#1B2731',
              }}>
            <Toolbar>
                <IconButton>
                    <Button
                      style={{
                          color: 'white',
                          fontSize: 15
                      }}
                      aria-controls="customized-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                      endIcon={<ExpandLessIcon />}
                    >
                        SERVICES
                    </Button>
                    <StyledMenu
                          id="customized-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                      >
                      <Typography
                          variant={"subtitle1"}
                          style={{
                              color: 'white',
                              fontSize: 15,
                              marginLeft:15
                          }}
                          >
                              PARAMÉTRAGE
                      </Typography>
                      <StyledMenuItem>
                          <ListItemText primary="Référentiel des gammes" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                         <ListItemText primary="Moteurs de recherche" href="/SearchEngines" />
                      </StyledMenuItem>
                      <StyledMenuItem>
                          <ListItemText primary="Groupes de moteurs de recherche" />
                      </StyledMenuItem>
                  </StyledMenu>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

