import { HeaderNavContext } from '@/components/Header/providers/Header';
import { useContext } from 'react';
import { StateProviderContext } from '@/components/Header/providers/Header';

export function useHeaderNav(): StateProviderContext {
  return useContext<StateProviderContext>(HeaderNavContext);
}
