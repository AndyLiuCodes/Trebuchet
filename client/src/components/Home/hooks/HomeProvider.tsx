import { HomeActionContext, HomeSetActionContext } from '@/components/Home';
import { ActionState } from '@/features/ActionBar';
import { useContext, Dispatch, SetStateAction } from 'react';

export function useHomeAction() {
  return useContext<ActionState>(HomeActionContext);
}

export function useHomeSetAction() {
  return useContext<Dispatch<SetStateAction<ActionState>>>(
    HomeSetActionContext
  );
}
