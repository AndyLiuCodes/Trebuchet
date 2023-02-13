import { MobileNavMenu } from './MobileNavMenu';
import AdbIcon from '@mui/icons-material/Adb';
import { MenuProp } from '@/components/Header/types/Menu';
import { Box } from '@mui/material';

export const MobileHeader = ({ pages }: MenuProp) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' },
        justifyContent: 'space-between',
        my: '10px',
        mx: '10px',
      }}
    >
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <AdbIcon sx={{ transform: 'scale(2)' }} />
      </Box>
      <MobileNavMenu pages={pages} />;
    </Box>
  );
};
