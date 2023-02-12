import { IconButton, Menu, MenuItem, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuProp } from '@/features/header/types/Menu';
import { useHeaderNav } from '@/features/header/hooks/HeaderProvider';
import { StateProviderContext } from '@/features/header/provider/HeaderProvider';

export const MobileNavMenu = ({ pages }: MenuProp) => {
  const {
    anchorElNav,
    handleOpenNavMenu,
    handleCloseNavMenu,
  }: StateProviderContext = useHeaderNav();

  const onNavMenuClick = (page: string) => {
    // handle routing
    handleCloseNavMenu();
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' },
        justifyContent: 'flex-end',
      }}
    >
      <IconButton
        size='large'
        aria-label='list of pages available'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleOpenNavMenu}
        color='inherit'
        sx={{ transform: 'scale(2)' }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page: string) => (
          <MenuItem
            key={page}
            onClick={() => {
              onNavMenuClick(page);
            }}
          >
            <Typography textAlign='center'>{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
