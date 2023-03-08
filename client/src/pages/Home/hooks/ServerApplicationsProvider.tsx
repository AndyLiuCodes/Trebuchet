import { useContext, Dispatch, SetStateAction } from 'react';
import {
  ServerApplicationsContext,
  SetServerApplicationsContext,
} from '@/pages/Home';
import { ApplicationDetails } from '@/types';

export function useServerApplications() {
  return useContext<ApplicationDetails[]>(ServerApplicationsContext);
}

export function useSetServerApplications() {
  return useContext<Dispatch<SetStateAction<ApplicationDetails[]>>>(
    SetServerApplicationsContext
  );
}
