import { ApplicationCard } from './ApplicationCard';
import { OnlineStatus } from '@/features/ContentContainer/';

export default {
  title: 'ContentContainer',
  component: ApplicationCard,
};

/*
{
    "rows": [
        {
            "Name": "Google",
            "Description": "",
            "IsTracked": 0,
            "SyncFrequency": 60,
            "ApplicationType": "website",
            "ServerImage": null,
            "Url": "https://google.ca",
            "IsFavourited": 0,
            "Position": 0,
            "id": 1
        }
    ]
}

{
  name: 'Test',
  description: 'blah blah blah',
  is_tracked: false,
  sync_frequency: 60,
  application_type: 'website',
  server_image: null,
  url: 'https://google.ca',
  is_favourited: false,
  position: 0
}
*/

export const ApplicationCardEditableAndOnline = () => (
  <ApplicationCard
    name={'Proxmox'}
    isEditable={true}
    onlineStatus={OnlineStatus.Online}
    imageName={'proxmox-logo.png'}
    url={'https://google.ca'}
    description={'hasdhas'}
    nextSync={0}
    lastSync={0}
  />
);

export const ApplicationCardEditableAndOffline = () => (
  <ApplicationCard
    name={'Proxmox'}
    isEditable={true}
    onlineStatus={OnlineStatus.Offline}
    imageName={'proxmox-logo.png'}
    url={'https://google.ca'}
    description={'hasdhas'}
    nextSync={0}
    lastSync={0}
  />
);

export const ApplicationCardNotEditableAndOnline = () => (
  <ApplicationCard
    name={'Proxmox'}
    isEditable={false}
    onlineStatus={OnlineStatus.Online}
    imageName={'proxmox-logo.png'}
    url={'https://google.ca'}
    description={'hasdhas'}
    nextSync={0}
    lastSync={0}
  />
);

export const ApplicationCardNotEditableAndOffline = () => (
  <ApplicationCard
    name={'Proxmox'}
    isEditable={false}
    onlineStatus={OnlineStatus.Offline}
    imageName={'proxmox-logo.png'}
    url={'https://google.ca'}
    description={'hasdhas'}
    nextSync={0}
    lastSync={0}
  />
);

export const ApplicationCardNotEditableNotTracked = () => (
  <ApplicationCard
    name={'Proxmox'}
    isEditable={false}
    onlineStatus={OnlineStatus.NotTracked}
    imageName={'proxmox-logo.png'}
    url={'https://google.ca'}
    description={'Server to help with managing virtual machines'}
    nextSync={0}
    lastSync={0}
  />
);

export const ApplicationCardEditableNotTracked = () => (
  <ApplicationCard
    name={'Proxmox'}
    isEditable={true}
    onlineStatus={OnlineStatus.NotTracked}
    imageName={'proxmox-logo.png'}
    url={'https://google.ca'}
    description={'Server to help with managing virtual machines'}
    nextSync={0}
    lastSync={0}
  />
);
