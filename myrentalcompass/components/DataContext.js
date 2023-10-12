import React, { useEffect } from 'react';

// Step 2: Start with the Import Error
// Ensure the DataContext is being exported.
const DataContext = React.createContext("NO_CONTEXT");

export const DataProvider = ({ children, value }) => {  // Destructure value prop
  useEffect(() => {
    console.log('Data received in DataContext Provider:', value);
  }, [value]);

  // Step 3: Address the useContext Error
  // Ensure that components using useContext(DataContext) are wrapped inside the DataContext.Provider.
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export const DataConsumer = DataContext.Consumer;

// Step 1: If it's a default export, update your import statement in recommendations.js to not use curly braces.
export default DataContext;