import { createContext, ReactElement } from 'react';

type ContentContainerProps = {
  handleDelete: (id: number) => void;
  children: boolean | ReactElement | undefined;
};

export const DeleteServerApplicationContext = createContext<
  (id: number) => void
>(() => {});

export function ContentContainerProvider({
  handleDelete,
  children,
}: ContentContainerProps) {
  return (
    <DeleteServerApplicationContext.Provider value={handleDelete}>
      {children}
    </DeleteServerApplicationContext.Provider>
  );
}
