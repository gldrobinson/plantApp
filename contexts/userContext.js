import React from "react";

export const userContext = React.createContext();

export const userProvider = (props) => {
  return (
    <userContext.Provider value={userValue}>
      {props.children}
    </userContext.Provider>
  );
};
