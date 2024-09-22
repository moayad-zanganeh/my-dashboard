import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Box,
  CardMedia,
  InputAdornment,
} from '@mui/material';
import { Search, Close } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Header = () => {
  return (
    <AppBar
      color="default"
      sx={{ width: '100%', position: 'relative', boxShadow: 'none' }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <CardMedia
            component="img"
            image="/images/Host brand.png"
            alt="logo"
            sx={{ width: 24, height: 24 }}
          />
        </Box>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <IconButton>
            <ChevronLeftIcon sx={{ color: '#424242' }} />
          </IconButton>
          <IconButton sx={{ color: '#424242' }}>
            <ChevronRightIcon />
          </IconButton>

          <InputBase
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
            style={{
              background: 'white',
              padding: '0 10px',
              borderRadius: 5,
              width: '100%',
              maxWidth: '400px',
            }}
          />
        </Box>

        <Box display="flex" alignItems="center">
          <IconButton color="inherit">
            <MoreHorizIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
            <CardMedia
              component="img"
              image="/images/Avatar (Fluent 2) (1).png"
              alt="logo"
              sx={{ width: 40, height: 40 }}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <IconButton color="inherit">
              <RemoveIcon sx={{ width: '20px', height: '20px', mx: 3 }} />
            </IconButton>
            <IconButton color="inherit">
              <CheckBoxOutlineBlankIcon
                sx={{ width: '15px', height: '15px', mx: 1 }}
              />
            </IconButton>
            <IconButton color="inherit">
              <CloseIcon sx={{ width: '17px', height: '17px', mx: 3 }} />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
