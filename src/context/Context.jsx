import React, { createContext, useState } from 'react';

// Create the context
export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [width, setwidth] = useState(300)
  const [show, setshow] = useState("-100%")
  

  return (
    <MyContext.Provider value={{width, setwidth, show, setshow}}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
