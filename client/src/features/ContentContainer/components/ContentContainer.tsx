import { Grid, Box } from '@mui/material';
import { ApplicationCard } from './ApplicationCard';
import {
  OnlineStatus,
  ApplicationServer,
} from '@/features/ContentContainer/types/serverApplicationTypes';
import { useState, useEffect } from 'react';
import { useHomeAction } from '@/components/Home';

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
  const [serverApplications, setServerApplications] = useState([]);
  const action = useHomeAction();

  useEffect(() => {
    fetch('http://localhost:8080/api/applications')
      .then((res) => res.json())
      .then((res) => {
        setServerApplications(res.data);
      });
  }, []);
  // const sixMinOld = new Date();
  // sixMinOld.setMinutes(sixMinOld.getMinutes() - 6);

  // const fiveMinOld = new Date();
  // fiveMinOld.setMinutes(fiveMinOld.getMinutes() - 5);

  // const fourMinOld = new Date();
  // fourMinOld.setMinutes(fourMinOld.getMinutes() - 4);

  // const freshTime = new Date();

  // const sixMinNew = new Date();
  // sixMinNew.setMinutes(sixMinNew.getMinutes() + 6);

  // const fiveMinNew = new Date();
  // fiveMinOld.setMinutes(fiveMinOld.getMinutes() + 5);

  // const fourMinNew = new Date();
  // fourMinOld.setMinutes(fourMinOld.getMinutes() + 4);
  // const tenMinOld = new Date();
  // tenMinOld.setMinutes(tenMinOld.getMinutes() - 10);

  // const serverApplications = [
  //   {
  //     key: 1,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.Online,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  //   {
  //     key: 2,
  //     name: 'asdfasdfasdfasd',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.Online,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: tenMinOld.getTime(),
  //     nextSync: fiveMinOld.getTime(),
  //   },
  //   {
  //     key: 3,
  //     name: 'Proxmox',
  //     isEditable: false,
  //     onlineStatus: OnlineStatus.Online,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: tenMinOld.getTime(),
  //     nextSync: sixMinOld.getTime(),
  //   },
  //   {
  //     key: 4,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.Online,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  //   {
  //     key: 5,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.Online,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  //   {
  //     key: 6,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.Online,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  //   {
  //     key: 7,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.Online,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  //   {
  //     key: 8,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.Offline,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  //   {
  //     key: 9,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.NotTracked,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  //   {
  //     key: 10,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.NotTracked,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  //   {
  //     key: 11,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.NotTracked,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  //   {
  //     key: 12,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.NotTracked,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  //   {
  //     key: 13,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.NotTracked,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  //   {
  //     key: 14,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.NotTracked,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  //   {
  //     key: 15,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.NotTracked,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  //   {
  //     key: 16,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.NotTracked,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  //   {
  //     key: 17,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.NotTracked,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  //   {
  //     key: 18,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.NotTracked,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  //   {
  //     key: 19,
  //     name: 'Proxmox',
  //     isEditable: true,
  //     onlineStatus: OnlineStatus.NotTracked,
  //     imageName: 'proxmox-logo.png',
  //     url: 'https://google.ca',
  //     description: 'hasfsajldgjlksadhgklsahg',
  //     lastSync: freshTime.getTime(),
  //     nextSync: sixMinNew.getTime(),
  //   },
  // ];

  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        direction='row'
        container
        columns={12}
        justifyContent={'center'}
        spacing={3}
      >
        {serverApplications.map((server: ApplicationServer) => {
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
                name={server.name}
                cardState={action}
                onlineStatus={2}
                imageName={server.imageName || 'proxmox-logo.png'}
                url={server.url}
                description={server.description}
                lastSync={Date.now()}
                nextSync={Date.now()}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
