import { MobileNavMenu } from './MobileNavMenu';
import { HeaderProvider } from '../providers/Header';
import * as PageConstant from '@/constants/pages';

export default {
  title: 'Mobile Navigation Menu',
  component: MobileNavMenu,
};

const pages = ['Settings', 'Statistics'];
export const DefaultNavMenu = () => (
  <>
    <HeaderProvider>
      <MobileNavMenu pages={PageConstant.PAGES} />
    </HeaderProvider>
  </>
);
