import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import OrderingFilter from '../simple-voting/OrderingFilter';
import { VotingContext } from '../../context';

const hasSnt = snt => Number(snt.balance) > 0;

const styles = {
  root: {
    flexGrow: 1,
    fontSize: '16px',
  },
  text: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-around'
  }
};

function ButtonAppBar(props) {
  const { classes, togglePoll, symbol } = props;
  return (
    <VotingContext.Consumer>
    {({ snt, toggleAdmin }) =>
      <div className={classes.root} >
        <AppBar position="static">
          <Toolbar className={classes.toolBar}>
            <Hidden mdDown>
              <Button className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleAdmin}>Admin</Button>
            </Hidden>
            {snt && <Button disabled={!hasSnt(snt)} variant="outlined" color="inherit" onClick={togglePoll}>{hasSnt(snt) ? 'Add Proposal' : 'Your account has no ' + symbol}</Button>}
          </Toolbar>
        </AppBar>
      </div>
    }
    </VotingContext.Consumer>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
