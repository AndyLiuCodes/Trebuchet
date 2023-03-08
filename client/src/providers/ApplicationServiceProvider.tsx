import { ReactElement } from 'react';
import ApplicationService from '@/services/apis/Applications';
import { Contextualizer, ProvidedServices } from '@/services';

type ApplicationServiceProvider = {
  children: ReactElement;
};

export const ApplicationsServiceContext = Contextualizer.createContext(
  ProvidedServices.ApplicationsService
);

function ApplicationServiceProvider({
  children,
}: ApplicationServiceProvider): ReactElement {
  const applicationService = ApplicationService();
  return (
    <ApplicationsServiceContext.Provider value={applicationService}>
      {children}
    </ApplicationsServiceContext.Provider>
  );
}

export default ApplicationServiceProvider;
