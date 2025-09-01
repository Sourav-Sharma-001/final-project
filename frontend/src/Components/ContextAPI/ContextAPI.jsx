import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default function ContextAPI({ children }) {
  const [currentPage, setCurrentPage] = useState("Home");
  const [processed, setProcessed] = useState(0);

  const incrementProcessed = () => setProcessed(prev => prev + 1);

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        processed,
        incrementProcessed
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
