import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { MobileHeader } from './MobileHeader';
import { DesktopHeader } from './DesktopHeader';
import { HeaderProvider } from '@/features/header/provider/HeaderProvider';
import * as PagesConstant from '@/constants/pages';

export const Header = () => {
  return (
    <HeaderProvider>
      <AppBar position='sticky' color='transparent' elevation={0}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <DesktopHeader pages={PagesConstant.PAGES} />
            <MobileHeader pages={PagesConstant.PAGES} />
          </Toolbar>
        </Container>
      </AppBar>
    </HeaderProvider>
  );
};
