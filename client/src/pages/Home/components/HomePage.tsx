import { Box } from '@mui/material';
import { ContentContainer } from '@/features/ContentContainer';
import { ActionBar } from '@/features/ActionBar';
import { HomeStateProvider, ServerApplicationsProvider } from '@/pages/Home';
import { useState } from 'react';
import { AddApplicationModal } from '@/features/AddApplicationCardModal';

export function Home() {
  const [addModalOpen, setAddModalOpen] = useState(false);

  function handleCloseModal() {
    setAddModalOpen(false);
  }

  function handleOpenModal() {
    setAddModalOpen(true);
  }

  return (
    <ServerApplicationsProvider>
      <HomeStateProvider>
        <Box>
          <Box
            sx={{
              paddingX: 6,
            }}
          >
            <ContentContainer />
            <Box sx={{ position: 'fixed', bottom: 0, right: 0 }}>
              <ActionBar onAddOpenClick={() => handleOpenModal()} />
            </Box>
          </Box>
          <AddApplicationModal
            modalOpen={addModalOpen}
            handleCloseModal={handleCloseModal}
          />
        </Box>
      </HomeStateProvider>
    </ServerApplicationsProvider>
  );
}
