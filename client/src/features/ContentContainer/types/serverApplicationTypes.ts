export enum OnlineStatus {
  NotTracked = 0,
  Offline = 1,
  Online = 2,
}

export interface ApplicationServer {
  id: number;
  name: string;
  isEditable: boolean;
  imageName: string;
  url: string;
  description: string;
  lastSync: number;
  nextSync: number;
}
