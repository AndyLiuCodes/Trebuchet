import { HeaderNavContext } from '@/features/header/provider/HeaderProvider';
import { useContext } from 'react';
import { StateProviderContext } from '@/features/header/provider/HeaderProvider';

export function useHeaderNav(): StateProviderContext {
  return useContext<StateProviderContext>(HeaderNavContext);
}
