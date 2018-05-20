import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

class Results extends Component {
  state = {
    open: false,
    currentImg: ''
  };

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let content;
    const { images } = this.props;

    if (images) {
      content = (
        <GridList cols={3}>
          {images.map(image => (
            <GridListTile key={image.id}>
              <img src={image.largeImageURL} alt={image.tags} />
              <GridListTileBar
                title={image.tags}
                subtitle={
                  <span>
                    by <strong>{image.user}</strong>
                  </span>
                }
                actionIcon={
                  <IconButton
                    onClick={() => this.handleOpen(image.largeImageURL)}
                  >
                    <ZoomInIcon color="secondary" />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      );
    } else {
      content = null;
    }

    const actions = [
      <Button color="primary" onClick={this.handleClose}>
        Close
      </Button>
    ];

    return (
      <div>
        {content}
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <img src={this.state.currentImg} alt="" style={{ width: '100%' }} />
          <DialogActions>
            {actions.map((action, i) => <div key={i}>{action}</div>)}
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

Results.propTypes = {
  images: PropTypes.array.isRequired
};

export default Results;
