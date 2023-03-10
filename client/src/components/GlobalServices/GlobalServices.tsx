import { ReactElement } from 'react';
import ApplicationServiceProvider from '@/providers/ApplicationServiceProvider';

type GlobalServicesType = {
  children: ReactElement;
};

function GlobalServices({ children }: GlobalServicesType): ReactElement {
  return <ApplicationServiceProvider>{children}</ApplicationServiceProvider>;
}

export default GlobalServices;
