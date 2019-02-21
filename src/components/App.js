import React from 'react';
import { Provider } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../containers/PrivateRoute';
import StartPage from '../containers/StartPage';
import ChatPage from '../containers/ChatPage';
import configureStore from '../store';
import history from '../utils/history'

const styles = theme =>({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

const store = configureStore();

const App = ({ classes }) =>(
  <Provider store={store}>
      <Router history={history}>
        <div className={classes.root}>
        <Switch>
          <Route exact path="/(start)?" component={StartPage} />
        <PrivateRoute path="/chat" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
        </div>
      </Router>
  </Provider>

);


export default withStyles(styles)(App);
