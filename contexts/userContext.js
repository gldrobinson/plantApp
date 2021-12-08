import React from "react";

export const userContext = React.createContext();

export const userProvider = (props) => {
  //const [user, setUser] = useState("Jay");
  return (
    <userContext.Provider value={user}>{props.children}</userContext.Provider>
  );
};
