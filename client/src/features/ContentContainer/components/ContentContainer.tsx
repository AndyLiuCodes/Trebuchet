import { Grid, Box } from '@mui/material';
import { ApplicationCard } from './ApplicationCard';
import {
  OnlineStatus,
  ApplicationServer,
} from '@/features/ContentContainer/types/serverApplicationTypes';
import { useState, useEffect } from 'react';
import { useHomeAction } from '@/pages/Home';
import {
  useServerApplications,
  useSetServerApplications,
} from '@/pages/Home/hooks/ServerApplicationsProvider';
import { applicationDetailsType } from '@/features/ContentContainer/types/serverApplicationTypes';

//card data
/*
[
  {
    id
    name
    description (optional)
    onlineStatus
    lastSync
    nextSync
    serverApplication
    image
    url
  }
]
*/

export function ContentContainer() {
  const serverApplications = useServerApplications();
  const setServerApplications = useSetServerApplications();

  const action = useHomeAction();

  useEffect(() => {
    fetch('http://localhost:8080/api/applications')
      .then((res) => res.json())
      .then((res) => {
        setServerApplications(res.data);
      });
  }, []);

  function handleDelete(id: number) {
    setServerApplications(
      serverApplications.filter(
        (server: applicationDetailsType) => server.id != id
      )
    );
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        direction='row'
        container
        columns={12}
        justifyContent={'center'}
        spacing={3}
      >
        {serverApplications.map((server: applicationDetailsType) => {
          return (
            <Grid
              item
              key={server.id}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              display='flex'
              justifyContent={'space-around'}
            >
              <ApplicationCard
                id={server.id}
                name={server.name}
                cardState={action}
                onlineStatus={2}
                imageName={server.server_image || 'proxmox-logo.png'}
                url={server.url}
                description={server.description}
                lastSync={Date.now()}
                nextSync={Date.now()}
                handleDelete={() => handleDelete(server.id)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
