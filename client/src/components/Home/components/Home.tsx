import { Box } from '@mui/material';
import { ContentContainer } from '@/features/ContentContainer';
import { ActionBar } from '@/features/ActionBar';
import { HomeStateProvider } from '@/components/Home';

export function Home() {
  return (
    <HomeStateProvider>
      <Box
        sx={{
          paddingX: 5,
        }}
      >
        <ContentContainer />
        <Box sx={{ position: 'absolute', bottom: 0, right: 0 }}>
          <ActionBar />
        </Box>
      </Box>
    </HomeStateProvider>
  );
}
