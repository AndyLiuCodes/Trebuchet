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
  description (optional) (make it into an info icon)
  onlineStatus x
  lastSync //
  nextSync // if has not received a new sync show warning in the icon
  serverApplication -> make an parent component that uses this to determine if a special card is made
  image x
  url x
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
  />
);
