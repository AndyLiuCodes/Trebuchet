import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import * as Constants from '@/constants/text';
import { MenuProp } from '@/features/header/types/Menu';
import { useHeaderNav } from '@/features/header/hooks/HeaderProvider';
import { StateProviderContext } from '@/features/header/provider/HeaderProvider';

export const DesktopHeader = ({ pages }: MenuProp) => {
  const { handleCloseNavMenu }: StateProviderContext = useHeaderNav();

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
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
};
