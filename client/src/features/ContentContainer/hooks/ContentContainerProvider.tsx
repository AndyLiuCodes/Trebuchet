import { useContext } from 'react';
import { DeleteServerApplicationContext } from '@/features/ContentContainer/providers/ContentContainer';

export function useDeleteServerApplication() {
  return useContext<(id: number) => void>(DeleteServerApplicationContext);
}
