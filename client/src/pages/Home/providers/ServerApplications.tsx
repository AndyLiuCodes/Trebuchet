import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import { ApplicationDetails } from '@/types';

type ServerApplicationsProps = {
  children: ReactElement;
};

export const ServerApplicationsContext = createContext<
  ApplicationDetails[]
>([]);
export const SetServerApplicationsContext = createContext<
  Dispatch<SetStateAction<ApplicationDetails[]>>
>(() => {});

export function ServerApplicationsProvider({
  children,
}: ServerApplicationsProps) {
  const [serverApplications, setServerApplications] = useState<
    ApplicationDetails[]
  >([]);

  return (
    <ServerApplicationsContext.Provider value={serverApplications}>
      <SetServerApplicationsContext.Provider value={setServerApplications}>
        {children}
      </SetServerApplicationsContext.Provider>
    </ServerApplicationsContext.Provider>
  );
}
