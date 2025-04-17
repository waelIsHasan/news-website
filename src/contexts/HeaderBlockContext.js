import { createContext,} from "react";
import {headerBlockData} from '../services/apiEndPoints.js'

const HeaderBlockContext = createContext();

export const HeaderBlockProvider = ({ children , headerTheme , color}) => {
    const value = headerBlockData[headerTheme]; // headerThem could be "doNotMiss" or "toBeSmart"
    let themeColor ;
    if(color === "blue"){
      themeColor = {
        x : color ,
        borderBottom: '2px solid blue'
      }
    }
    else {
        themeColor = {
          // backgroundColor : 'black',
          x : color ,
          borderBottom: '2px solid black',
        }
    }
    return (
    <HeaderBlockContext.Provider value={{value , themeColor}}>
      {children}
    </HeaderBlockContext.Provider>
  );
};

export default HeaderBlockContext;

