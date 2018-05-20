import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  center: {
    margin: 'auto'
  }
});

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" color="secondary">
        <Toolbar className={classes.center}>
          <Typography variant="subheading" color="inherit">
            Copyright {new Date().getFullYear()} Gordon Doskas
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Footer);
