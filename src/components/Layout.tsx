import { Box } from '@mui/material';
import { styled } from '@mui/system';
import { Outlet } from 'react-router-dom';

const AppGrid = styled(Box)(() => ({
  display: 'flex',
  height: '100vh',
}));

/**
 *  Host file for all routes, can contain page headers
 * @returns
 */
export function Layout() {
  return (
    <AppGrid>
      <Outlet key="LayoutOutlet" />
    </AppGrid>
  );
}
