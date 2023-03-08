import { IApplicationsService } from '@/services/apis/Applications';
import { Contextualizer, ProvidedServices } from '@/services';

const useApplicationService = function () {
  return Contextualizer.use<IApplicationsService>(
    ProvidedServices.ApplicationsService
  );
};

export default useApplicationService;
