export interface IApplication {
  [key: string]: ApplicationOptionType;
}

export type ApplicationOptionType = {
  id: number;
  label: string;
  imagePath: string;
};

export const Proxmox: ApplicationOptionType = {
  id: 0,
  label: 'Proxmox',
  imagePath: 'src/assets/ApplicationLogos/proxmox-logo.png',
};

export const Website: ApplicationOptionType = {
  id: 1,
  label: 'Website',
  imagePath: 'src/assets/ApplicationLogos/website-logo.png',
};

export const Custom: ApplicationOptionType = {
  id: 2,
  label: 'Custom',
  imagePath: '',
};

export const Applications: IApplication = {
  Proxmox: Proxmox,
  Website: Website,
  Custom: Custom,
};
