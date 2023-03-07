import {
  createContext,
  useState,
  ReactElement,
  Dispatch,
  SetStateAction,
} from 'react';
import { ActionState } from '@/features/ActionBar';

type HomeProviderProps = {
  children: ReactElement;
};

export const HomeActionContext = createContext<ActionState>(0);

export const HomeSetActionContext = createContext<
  Dispatch<SetStateAction<ActionState>>
>(() => {});

export function HomeStateProvider({ children }: HomeProviderProps) {
  const [actionState, setActionState] = useState(ActionState.Viewing);
  return (
    <HomeActionContext.Provider value={actionState}>
      <HomeSetActionContext.Provider value={setActionState}>
        {children}
      </HomeSetActionContext.Provider>
    </HomeActionContext.Provider>
  );
}
