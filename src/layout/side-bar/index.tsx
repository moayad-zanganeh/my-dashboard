import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  CardMedia,
  AppBar,
} from '@mui/material';
import {
  Notifications,
  Chat,
  Group,
  CalendarToday,
  Phone,
  InsertDriveFile,
  MoreVert,
  Add,
} from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f5f5f5',
        width: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <List>
        <ListItem
          component="div"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ListItemIcon sx={{ justifyContent: 'center' }}>
            <Notifications />
          </ListItemIcon>
          <ListItemText primary="Activity" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
