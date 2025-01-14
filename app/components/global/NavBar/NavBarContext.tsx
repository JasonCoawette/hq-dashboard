import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavBarContextType {
  showOverlay: boolean;
  setShowOverlay: (show: boolean) => void;
}

const NavBarContext = createContext<NavBarContextType | undefined>(undefined);

export const NavBarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <NavBarContext.Provider value={{ showOverlay, setShowOverlay }}>
      {children}
    </NavBarContext.Provider>
  );
};

export const useNavBarContext = () => {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error('useNavBarContext must be used within a NavBarProvider');
  }
  return context;
};