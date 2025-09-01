import React, { createContext, useState } from "react";

export const AppContext = createContext();

export default function ContextAPI({ children }) {
  const [currentPage, setCurrentPage] = useState("Home");
  const [processed, setProcessed] = useState(0);
  const [refreshInvoices, setRefreshInvoices] = useState(false);

  const incrementProcessed = () => setProcessed(prev => prev + 1);
  const triggerRefresh = () => setRefreshInvoices(prev => !prev);

  return (
    <AppContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        processed,
        incrementProcessed,
        refreshInvoices,
        triggerRefresh
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
