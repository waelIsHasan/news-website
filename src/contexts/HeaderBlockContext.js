import { createContext,} from "react";
import {headerBlockData} from '../services/apiEndPoints.js'

const HeaderBlockContext = createContext();

export const HeaderBlockProvider = ({ children , headerTheme}) => {
    const value = headerBlockData[headerTheme]; // headerThem could be "doNotMiss" or "toBeSmart"
    return (
    <HeaderBlockContext.Provider value={value}>
      {children}
    </HeaderBlockContext.Provider>
  );
};

export default HeaderBlockContext;

