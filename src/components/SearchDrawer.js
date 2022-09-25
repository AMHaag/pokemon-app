import React from 'react';
import {
  SwipeableDrawer,
  Box,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import NumbersIcon from '@mui/icons-material/Numbers';
import MailIcon from '@mui/icons-material/Mail';

export default function SearchDrawer(props) {
  let show = props.show;
  function closeDrawer() {
    props.toggle(false);
    console.log(show);
  }
  function openDrawer() {
    props.toggle(true);
    console.log(show);
  }
  function trace(e) {
    console.log(e);
  }
  return (
    <>
      <SwipeableDrawer
        anchor='bottom'
        open={show}
        onClose={closeDrawer}
        onOpen={openDrawer}
      >
        <ClickAwayListener
          mouseEvent='onMouseDown'
          touchEvent='onTouchStart'
          onClickAway={closeDrawer}
        >
          <Box
            role='presentation'
            onClick={trace}
            onKeyDown={trace}
          >
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map(
                (text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <NumbersIcon/>
                      </ListItemIcon>
                      <ListItemText primary={'test'} />
                    </ListItemButton>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <NumbersIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </ClickAwayListener>
      </SwipeableDrawer>
    </>
  );
}
