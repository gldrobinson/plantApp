import React, { useState } from "react";

import { useContext } from "react";

export const userContext = React.createContext();
// export const updateUser = useContext(userContext);
export const userProvider = (props) => {
    //const [user, setUser] = useState("Jay");
    return (
        <userContext.Provider value={user}>
            {props.children}
        </userContext.Provider>
    );
};
