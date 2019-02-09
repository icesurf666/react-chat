import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import StartPage from './StartPage';
import ChatPage from './ChatPage';

const App = () =>(
  <Router>
    <Switch>
      <Route exact path="/(start)?" component={StartPage} />
    <Route path="/chat" component={ChatPage} />
      <Redirect to="/" />
    </Switch>
  </Router>

);

// class App extends React.Component {
//
//   render() {
//     const { classes } = this.props;
//     return (
//       <div className={classes.root}>
//         <ChatHeader />
//
//       <Sidebar chats={chats} />
//       <Chat messages={messages}/>
//
//       </div>
//     );
//   }
// }

export default App;
