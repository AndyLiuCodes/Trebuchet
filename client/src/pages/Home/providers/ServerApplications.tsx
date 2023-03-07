import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import { applicationDetailsType } from '@/features/ContentContainer/types/serverApplicationTypes';

type ServerApplicationsProps = {
  children: ReactElement;
};

export const ServerApplicationsContext = createContext<
  Array<applicationDetailsType>
>([]);
export const SetServerApplicationsContext = createContext<
  Dispatch<SetStateAction<Array<applicationDetailsType>>>
>(() => {});

export function ServerApplicationsProvider({
  children,
}: ServerApplicationsProps) {
  const [serverApplications, setServerApplications] = useState<
    Array<applicationDetailsType>
  >([]);

  return (
    <ServerApplicationsContext.Provider value={serverApplications}>
      <SetServerApplicationsContext.Provider value={setServerApplications}>
        {children}
      </SetServerApplicationsContext.Provider>
    </ServerApplicationsContext.Provider>
  );
}
