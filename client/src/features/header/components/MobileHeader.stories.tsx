import { MobileHeader } from './MobileHeader';

export default {
  title: 'Mobile Navigation Menu',
  component: MobileHeader,
};

const pages = ['Settings', 'Statistics'];
export const MobileHeaderDefault = () => <MobileHeader pages={pages} />;
