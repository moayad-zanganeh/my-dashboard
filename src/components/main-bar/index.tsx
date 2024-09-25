import React from 'react';
import ChartBox from './chart';
import Filter from './filter';
import HeaderMainBar from './header';
import SideBar from './side-bar';
import { Box } from '@mui/material';

function MainBar() {
  return (
    <>
      <HeaderMainBar />

      <Filter />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <SideBar />

        <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
          <ChartBox />
        </Box>
      </Box>
    </>
  );
}

export default MainBar;
