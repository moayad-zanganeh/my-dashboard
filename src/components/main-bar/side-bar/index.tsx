import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  ListItemIcon,
  Box,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

function SideBar() {
  const [openGroup, setOpenGroup] = useState(false);
  const [openOption2, setOpenOption2] = useState(false);
  const [selected, setSelected] = useState(false); // وضعیت جدید برای Option 2

  const handleGroupClick = () => {
    setOpenGroup(!openGroup);
  };

  const handleOption2Click = () => {
    setOpenOption2(!openOption2);
    setSelected(!selected);
  };
  return (
    <Box
      sx={{
        width: '29%',
        borderRight: 'solid 1px #ccc',
        height: '100vh',
      }}
    >
      <List component="nav" sx={{ width: '100%' }}>
        <ListItem onClick={handleGroupClick} sx={{}}>
          <ListItemIcon sx={{ minWidth: '20%' }}>
            {openGroup ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
          <ListItemText primary="Group Title" />
        </ListItem>
        <Collapse in={openGroup} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem sx={{ ml: '8px', p: 0 }}>
              <ListItemIcon>
                <ExpandMore />
              </ListItemIcon>
              <ListItemText primary="Option 1" />
            </ListItem>
            <ListItem
              onClick={handleOption2Click}
              sx={{
                pl: 4,
                backgroundColor: selected ? '#f5f5f5' : 'transparent',
                borderRadius: selected ? '10px' : '0px',
                transition: 'background-color 0.3s, border-radius 0.3s',
              }}
            >
              <ListItemIcon>
                {openOption2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemIcon>
              <ListItemText primary="Option 2" sx={{ minWidth: '53%' }} />
            </ListItem>
            <Collapse in={openOption2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <ListItem key={index} sx={{ pl: 8 }}>
                    <ListItemIcon>
                      <ExpandMore />
                    </ListItemIcon>
                    <ListItemText
                      primary={`Item ${item}`}
                      sx={{ minWidth: '53%' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        </Collapse>
      </List>
    </Box>
  );
}

export default SideBar;
