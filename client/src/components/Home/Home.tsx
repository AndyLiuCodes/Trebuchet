import { Box } from '@mui/material';
import { ContentSquare } from '@/features/ContentContainer/';

export function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingX: 5,
      }}
    >
      <ContentSquare />
    </Box>
  );
}
