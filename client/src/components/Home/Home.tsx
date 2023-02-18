import { Box } from '@mui/material';
import { ContentSquare } from '@/features/ContentContainer/';

export function Home() {
  return (
    <>
      {/* <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      > */}
      <ContentSquare />
      {/* This will contain the content grid that displays server cards */}
      {/* </Box> */}
    </>
  );
}
