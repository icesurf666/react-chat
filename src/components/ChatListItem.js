import React from 'react';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import Avatar from './Avatar';

const styles = theme => ({
  activeItem: {
    backgroundColor: theme.palette.grey[200],
  }
});

const ChatListItem = ({ classes, disabled, title, chatId, active, createdAt }) => (
  <ListItem
    button
    component={Link}
    to={`/chat/${chatId}`}
    className={active ? classes.activeItem : ''}
    disabled={disabled}
  >
    <Avatar colorFrom={chatId}>{title}</Avatar>
    <ListItemText primary={title} secondary={moment(createdAt).fromNow()}/>
  </ListItem>
);

export default withStyles(styles)(ChatListItem);
