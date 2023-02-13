import { MobileHeader } from './MobileHeader';
import * as PageConstant from '@/constants/pages';
export default {
  title: 'Mobile Navigation Menu',
  component: MobileHeader,
};

export const MobileHeaderDefault = () => (
  <MobileHeader pages={PageConstant.PAGES} />
);
