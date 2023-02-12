import { MobileNavMenu } from './MobileNavMenu';
import { HeaderProvider } from '../provider/HeaderProvider';

export default {
  title: 'Mobile Navigation Menu',
  component: MobileNavMenu,
};

const pages = ['Settings', 'Statistics'];
export const DefaultNavMenu = () => (
  <>
    <HeaderProvider>
      <MobileNavMenu pages={pages} />
    </HeaderProvider>
  </>
);
