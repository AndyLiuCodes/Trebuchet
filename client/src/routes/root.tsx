import { Header } from '@/components/Header';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <Container maxWidth={false}>
      <Header />
      <Outlet />
    </Container>
  );
}
