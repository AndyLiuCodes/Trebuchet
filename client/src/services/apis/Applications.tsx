import { ApplicationDetails, ModalApplicationDetails } from '@/types';

const API_URL = 'http://localhost:8080/api/applications';

export interface IApplicationsService {
  getServerApplications(): Promise<ApplicationDetails[]>;
  addServerApplication(
    newApplicationDetails: ModalApplicationDetails
  ): Promise<any>;
  deleteServerApplication(id: number): Promise<Response>;
}

export function ApplicationsService(): IApplicationsService {
  const applicationsService = {
    async getServerApplications(): Promise<ApplicationDetails[]> {
      return fetch(API_URL)
        .then((res) => res.json())
        .then((res) => {
          return res.data;
        });
    },
    async addServerApplication(newApplicationDetails: ModalApplicationDetails) {
      return fetch(API_URL + '/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newApplicationDetails),
      }).then((res) => res.json());
    },
    async deleteServerApplication(id: number): Promise<Response> {
      return fetch(API_URL + `/delete/${id}`, {
        method: 'POST',
      });
    },
  };

  return applicationsService;
}

export default ApplicationsService;
