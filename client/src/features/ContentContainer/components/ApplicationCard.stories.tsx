import { ApplicationCard } from './ApplicationCard';
import { OnlineStatus } from '@/features/ContentContainer/';

export default {
  title: 'ContentContainer',
  component: ApplicationCard,
};

/*
{
  id x
  name x
  description (optional)
  onlineStatus x
  lastSync
  nextSync
  serverApplication
  image
  url
}
*/

export const ApplicationCardEditableAndOnline = () => (
  <ApplicationCard
    name={'Proxmox'}
    isEditable={true}
    onlineStatus={OnlineStatus.Online}
    imageName={'proxmox-logo.png'}
  />
);

export const ApplicationCardEditableAndOffline = () => (
  <ApplicationCard
    name={'Proxmox'}
    isEditable={true}
    onlineStatus={OnlineStatus.Offline}
    imageName={'proxmox-logo.png'}
  />
);

export const ApplicationCardNotEditableAndOnline = () => (
  <ApplicationCard
    name={'Proxmox'}
    isEditable={false}
    onlineStatus={OnlineStatus.Online}
    imageName={'proxmox-logo.png'}
  />
);

export const ApplicationCardNotEditableAndOffline = () => (
  <ApplicationCard
    name={'Proxmox'}
    isEditable={false}
    onlineStatus={OnlineStatus.Offline}
    imageName={'proxmox-logo.png'}
  />
);

export const ApplicationCardNotEditableNotTracked = () => (
  <ApplicationCard
    name={'Proxmox'}
    isEditable={false}
    onlineStatus={OnlineStatus.NotTracked}
    imageName={'proxmox-logo.png'}
  />
);

export const ApplicationCardEditableNotTracked = () => (
  <ApplicationCard
    name={'Proxmox'}
    isEditable={true}
    onlineStatus={OnlineStatus.NotTracked}
    imageName={'proxmox-logo.png'}
  />
);
