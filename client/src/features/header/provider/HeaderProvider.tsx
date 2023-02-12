import { createContext, useState, ReactNode, MouseEvent } from 'react';

type HeaderProviderProps = {
  children: ReactNode;
};

export interface StateProviderContext {
  anchorElNav: null | HTMLElement;
  handleOpenNavMenu: (event: MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu: () => void;
}

export const HeaderNavContext = createContext<StateProviderContext>({
  anchorElNav: null,
  handleOpenNavMenu: (_: MouseEvent<HTMLElement>) => {},
  handleCloseNavMenu: () => {},
});

export function HeaderProvider({ children }: HeaderProviderProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HeaderNavContext.Provider
      value={{ anchorElNav, handleOpenNavMenu, handleCloseNavMenu }}
    >
      {children}
    </HeaderNavContext.Provider>
  );
}
