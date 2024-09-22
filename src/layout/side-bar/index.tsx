import {
  Box,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  PiBell,
  PiCalendarDots,
  PiChatCircleTextThin,
  PiDotsThreeOutlineFill,
  PiFile,
  PiPhoneLight,
} from 'react-icons/pi';
import { GrGroup } from 'react-icons/gr';
import { CiSquarePlus } from 'react-icons/ci';

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
        borderTop: 'solid 1px #00000014',
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
          <Box mt={2}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <PiBell size={30} />
            </ListItemIcon>
            <ListItemText primary="Activity" sx={{ textAlign: 'center' }} />
          </Box>

          <Box mt={2}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <PiChatCircleTextThin size={30} />
            </ListItemIcon>
            <ListItemText primary="Chat" sx={{ textAlign: 'center' }} />
          </Box>

          <Box mt={2}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <GrGroup size={30} />
            </ListItemIcon>
            <ListItemText primary="Teams" sx={{ textAlign: 'center' }} />
          </Box>

          <Box mt={2}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <PiCalendarDots size={30} />
            </ListItemIcon>
            <ListItemText primary="Calendar" sx={{ textAlign: 'center' }} />
          </Box>

          <Box mt={2}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <PiPhoneLight size={30} />
            </ListItemIcon>
            <ListItemText primary="Calls" sx={{ textAlign: 'center' }} />
          </Box>

          <Box mt={2}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <PiFile size={30} />
            </ListItemIcon>
            <ListItemText primary="Files" sx={{ textAlign: 'center' }} />
          </Box>

          <Box display="flex" alignItems="center" mt={2}>
            <CardMedia
              component="img"
              image="/images/Stack.png"
              alt="logo"
              sx={{ width: 60, height: 39 }}
            />
          </Box>

          <Box mt={2}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <PiDotsThreeOutlineFill size={30} />
            </ListItemIcon>
          </Box>
          <Box mt={2}>
            <ListItemIcon sx={{ justifyContent: 'center' }}>
              <CiSquarePlus size={30} />
            </ListItemIcon>
            <ListItemText primary="Chat" sx={{ textAlign: 'center' }} />
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
