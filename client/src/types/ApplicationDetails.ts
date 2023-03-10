export type ModalApplicationDetails = {
  name: string;
  description: string;
  isTracked: boolean;
  syncFrequency: number;
  applicationType: string;
  serverImage: any;
  url: string;
  isFavourite: boolean;
  position: number;
};

export type ApplicationDetails = {
  id: number;
  dateAdded: Date;
  name: string;
  description: string;
  isTracked: boolean;
  syncFrequency: number;
  applicationType: string;
  serverImage: any;
  url: string;
  isFavourite: boolean;
  position: number;
};
