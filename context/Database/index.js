import React, { createContext, useState, useContext } from "react";

import database from "./db/database";

const DatabaseContext = createContext({});

export const useDatabase = () => useContext(DatabaseContext);

export const DatabaseProvider = ({ children }) => {
  const [data, setData] = useState(database);

  return (
    <DatabaseContext.Provider value={{ database: data, setDatabase: setData }}>
      {children}
    </DatabaseContext.Provider>
  );
};
