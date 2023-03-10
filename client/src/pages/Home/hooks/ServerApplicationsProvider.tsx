import { useContext, Dispatch, SetStateAction } from 'react';
import {
  ServerApplicationsContext,
  SetServerApplicationsContext,
} from '@/pages/Home';
import { ApplicationDetails } from '@/types';

export function useServerApplications(): [
  ApplicationDetails[],
  Dispatch<SetStateAction<ApplicationDetails[]>>
] {
  return [
    useContext<ApplicationDetails[]>(ServerApplicationsContext),
    useContext<Dispatch<SetStateAction<ApplicationDetails[]>>>(
      SetServerApplicationsContext
    ),
  ];
}
