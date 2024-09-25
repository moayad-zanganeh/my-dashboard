import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Box,
  InputBase,
  CardMedia,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const HeaderMainBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 'none',
        backgroundColor: '#fff',
        color: 'black',
        borderBottom: 'solid 1px #00000014',
      }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center">
          <CardMedia
            component="img"
            image="/images/Avatar (Fluent 2).png"
            alt="logo"
            sx={{ width: 35, height: 35 }}
          />
          <Typography
            variant="h3"
            sx={{ color: 'black', fontWeight: 700, fontSize: '20px', mx: 2 }}
          >
            Van Arsdel
          </Typography>
        </Box>
        <Box display="flex" flexGrow={1}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
            }}
          >
            <Typography
              variant="h6"
              onClick={handleMenuClick}
              sx={{
                cursor: 'pointer',
                marginRight: '16px',
                fontSize: '15px',
              }}
            >
              Home
            </Typography>
            <Box
              sx={{
                backgroundColor: '#5B5FC7',
                borderBottomLeftRadius: '3px',
                borderBottomRightRadius: '3px',
                height: '5px',
                width: '40px',
              }}
            ></Box>
          </Box>
          <Typography
            variant="h6"
            onClick={handleMenuClick}
            style={{ cursor: 'pointer', marginRight: '16px', fontSize: '15px' }}
          >
            Timeline
          </Typography>
          <Typography
            variant="h6"
            onClick={handleMenuClick}
            style={{ cursor: 'pointer', marginRight: '16px', fontSize: '15px' }}
          >
            Chat
          </Typography>
          <Typography
            variant="h6"
            onClick={handleMenuClick}
            style={{ cursor: 'pointer', marginRight: '16px', fontSize: '15px' }}
          >
            Assigned to you
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
          <CardMedia
            component="img"
            image="/images/Icon.png"
            alt="logo"
            sx={{ width: 24, height: 24 }}
          />
        </Box>
        <IconButton color="inherit">
          <MoreHorizIcon />
        </IconButton>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default HeaderMainBar;
