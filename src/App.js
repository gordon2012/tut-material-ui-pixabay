import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Footer from './components/Footer';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

const styles = theme => ({
  root: {
    background: 'lightgrey'
  },
  container: {
    minHeight: '100vh'
  },
  grow: {
    flex: 1
  },
  pad: {
    padding: theme.spacing.unit * 2
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          className={classes.container}
          direction="column"
          justify="center"
        >
          <Grid item xs={12}>
            <NavBar />
          </Grid>
          <Grid item xs={12} className={`${classes.grow} ${classes.pad}`}>
            <Paper className={classes.pad}>
              <Search />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
