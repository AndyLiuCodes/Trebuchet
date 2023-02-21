import { Header } from '@/components/Header';
import { Box } from '@mui/material/';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
}
