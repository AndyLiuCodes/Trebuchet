import { HomeActionContext, HomeSetActionContext } from '@/pages/Home';
import { ActionState } from '@/features/ActionBar';
import { useContext, Dispatch, SetStateAction } from 'react';

export function useHomeAction(): [
  ActionState,
  Dispatch<SetStateAction<ActionState>>
] {
  return [
    useContext<ActionState>(HomeActionContext),
    useContext<Dispatch<SetStateAction<ActionState>>>(HomeSetActionContext),
  ];
}
