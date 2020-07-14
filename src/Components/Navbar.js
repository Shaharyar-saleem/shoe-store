import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, Router } from 'react-router-dom';
import { withTheme } from '@material-ui/styles';
import Style from '../App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  links: {
      color: 'white',
      marginRight: 15,
      fontSize: 20,
      textDecoration: 'none',
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
            <Link to="/" className={classes.links}>Home</Link>
            <Link to="/about" className={classes.links}>About</Link>
            <Link to="/product" className={classes.links}>Product</Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
