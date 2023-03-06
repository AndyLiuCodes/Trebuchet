import { useContext, Dispatch, SetStateAction } from 'react';
import {
  ServerApplicationsContext,
  SetServerApplicationsContext,
} from '@/components/Home';
import { applicationDetailsType } from '@/features/ContentContainer';

export function useServerApplications() {
  return useContext<Array<applicationDetailsType>>(ServerApplicationsContext);
}

export function useSetServerApplications() {
  return useContext<Dispatch<SetStateAction<Array<applicationDetailsType>>>>(
    SetServerApplicationsContext
  );
}
