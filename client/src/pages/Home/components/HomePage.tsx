import { useState } from 'react';
import { Box } from '@mui/material';
import { ContentContainer, LayoutOptions } from '@/features/ContentContainer';
import { ActionBar } from '@/features/ActionBar';
import {
  HomeStateProvider,
  ServerApplicationsProvider,
  ModalOptions,
} from '@/pages/Home';
import { AddApplicationModal } from '@/features/AddApplicationCardModal';

export function Home() {
  const [currentModal, setCurrentModal] = useState<ModalOptions>(
    ModalOptions.None
  );
  const [currentLayout, setCurrentLayout] = useState<LayoutOptions>(
    LayoutOptions.Grid
  );

  function handleCloseModal() {
    setCurrentModal(ModalOptions.None);
  }

  function handleOpenModal(modal: ModalOptions) {
    setCurrentModal(modal);
  }

  return (
    <ServerApplicationsProvider>
      <HomeStateProvider>
        <>
          <Box
            sx={{
              paddingX: 6,
            }}
          >
            <ContentContainer layout={currentLayout} />
            <Box sx={{ position: 'fixed', bottom: 0, right: 0 }}>
              <ActionBar onOpenModal={handleOpenModal} />
            </Box>
          </Box>
          <AddApplicationModal
            modalOpen={currentModal === ModalOptions.AddApplication}
            handleCloseModal={handleCloseModal}
          />
        </>
      </HomeStateProvider>
    </ServerApplicationsProvider>
  );
}
