import { ActionState } from '@/features/ActionBar';

export enum OnlineStatus {
  NotTracked = 0,
  Offline = 1,
  Online = 2,
}

export interface ApplicationServer {
  id: number;
  name: string;
  cardState: ActionState;
  imageName: string;
  url: string;
  description: string;
  lastSync: number;
  nextSync: number;
}

export interface applicationDetailsType {
  id: number;
  date_added: Date;
  name: string;
  description: string;
  is_tracked: boolean;
  sync_frequency: number;
  application_type: string;
  server_image: any;
  url: string;
  is_favourite: boolean;
  position: number;
}
