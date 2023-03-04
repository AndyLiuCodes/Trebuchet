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
