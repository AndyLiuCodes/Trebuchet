import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';
import { HeaderProvider } from '@/components/Header/providers/Header';
import * as PagesConstant from '@/constants/pages';

export const Header = () => {
  return (
    <HeaderProvider>
      <AppBar
        position='sticky'
        sx={{ backgroundColor: 'inherit', marginBottom: '10px' }}
        elevation={0}
      >
        <Container maxWidth={false}>
          <Toolbar disableGutters>
            <DesktopHeader pages={PagesConstant.PAGES} />
            <MobileHeader pages={PagesConstant.PAGES} />
          </Toolbar>
        </Container>
      </AppBar>
    </HeaderProvider>
  );
};
