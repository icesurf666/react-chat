import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Avatar from './Avatar';

import titleInitials from '../utils/title-initials';

const styles = theme => ({
  // ...
});

const ChatListItem = ({ classes, title }) => (
  <ListItem button>
    <Avatar colorFrom={title}>{title}</Avatar>
    <ListItemText primary={title}/>
  </ListItem>
);

export default withStyles(styles)(ChatListItem);

