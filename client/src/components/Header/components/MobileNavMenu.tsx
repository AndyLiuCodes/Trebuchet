import { IconButton, Menu, MenuItem, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuProp } from '@/components/Header/types/Menu';
import { useHeaderNav } from '@/components/Header/hooks/HeaderProvider';
import { StateProviderContext } from '@/components/Header/providers/Header';
import { Page } from '@/components/Header/types/Menu';
import { useNavigate } from 'react-router-dom';

export const MobileNavMenu = ({ pages }: MenuProp) => {
  const {
    anchorElNav,
    handleOpenNavMenu,
    handleCloseNavMenu,
  }: StateProviderContext = useHeaderNav();
  const navigate = useNavigate();

  const onNavMenuClick = (route: string) => {
    handleCloseNavMenu();
    navigate(route);
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
        <MenuIcon sx={{ color: '#E5E5CB' }} />
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
          '& .MuiPaper-root': {
            backgroundColor: '#1A120B',
          },
        }}
      >
        {pages.map((page: Page) => (
          <MenuItem
            key={page.name}
            onClick={() => {
              onNavMenuClick(page.route);
            }}
          >
            <Typography
              textAlign='center'
              sx={{
                color: '#E5E5CB',
              }}
            >
              {page.name}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
