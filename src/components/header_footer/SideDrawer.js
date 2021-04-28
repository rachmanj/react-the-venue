import React from 'react';

import { Drawer, List, ListItem } from '@material-ui/core';

const SideDrawer = props => {
  return (
    <Drawer
      anchor={'right'}
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => alert('Clicked')}>
          Name of Item
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
