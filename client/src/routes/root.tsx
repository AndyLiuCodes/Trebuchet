import { Header } from '@/components/Header';
import { Box } from '@mui/material/';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Header />
      <Box flex={1}>
        <Outlet />
      </Box>
    </Box>
  );
}
