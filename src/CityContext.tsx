import React, { createContext, useContext, useState, type ReactNode } from "react";
import { CityData } from "./types";
import { kingstonCityData } from "./data/cities";

interface CityContextType {
  city: CityData;
  isLanguageModalOpen: boolean;
  setIsLanguageModalOpen: (isOpen: boolean) => void;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export const CityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  return (
    <CityContext.Provider
      value={{
        city: kingstonCityData,
        isLanguageModalOpen,
        setIsLanguageModalOpen,
      }}
    >
      {children}
    </CityContext.Provider>
  );
};

export const useCity = () => {
  const context = useContext(CityContext);
  if (!context) {
    throw new Error("useCity must be used within a CityProvider");
  }
  return context;
};
