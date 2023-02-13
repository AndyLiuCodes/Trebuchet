import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import * as Constants from '@/constants/text';
import { MenuProp } from '@/components/Header/types/Menu';
import { useHeaderNav } from '@/components/Header/hooks/HeaderProvider';
import { StateProviderContext } from '@/components/Header/providers/Header';
import { useNavigate } from 'react-router-dom';

export const DesktopHeader = ({ pages }: MenuProp) => {
  const { handleCloseNavMenu }: StateProviderContext = useHeaderNav();
  const navigate = useNavigate();

  const onNavMenuClick = (route: string) => {
    handleCloseNavMenu();
    navigate(route);
  };

  return (
    <>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant='h4'
        noWrap
        component='a'
        href='/'
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          color: 'teal',
          textDecoration: 'none',
        }}
      >
        {Constants.APPLICATION_NAME}
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'flex-end',
        }}
      >
        {pages.map((page) => (
          <Button
            key={page.name}
            onClick={() => {
              onNavMenuClick(page.route);
            }}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page.name}
          </Button>
        ))}
      </Box>
    </>
  );
};
