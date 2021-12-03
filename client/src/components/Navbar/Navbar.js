import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography } from '@material-ui/core';

import useStyles from './Styles';
import logo from '../../images/logo.png';

const Navbar = () => {
    const classes = useStyles();

    const user = null;

    return (
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">klez.sap</Typography>
          <img className={classes.image} src={logo} alt="icon" height="60" />
        </div>
    </AppBar>
      
    )
}

export default Navbar;
