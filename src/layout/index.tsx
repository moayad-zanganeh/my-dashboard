import { Box } from '@mui/material';
import Sidebar from './side-bar';
import Header from './header';

const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header />

      <Box display="flex" flexGrow={1}>
        <Sidebar />
        <Box p={3} flexGrow={1}>
          <h1>Dashboard Content</h1>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
