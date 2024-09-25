import { Box } from '@mui/material';
import Sidebar from './side-bar';
import Header from './header';
import MainBar from '../components/main-bar';

const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh">
      <Header />

      <Box display="flex" flexGrow={1}>
        <Sidebar />
        <Box flexGrow={1}>
          <MainBar />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
