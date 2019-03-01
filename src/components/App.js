import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../containers/PrivateRoute';
import StartPage from '../containers/StartPage';
import ChatPage from '../containers/ChatPage';
import history from '../utils/history';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});



const App = ({ classes }) => (
  <Router history={history}>
    <div className={classes.root}>
      <Switch>
        <Route exact path="/(start)?" component={StartPage} />
        <PrivateRoute path="/chat/:chatId?" component={ChatPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

export default withStyles(styles)(App);
