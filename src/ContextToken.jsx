import { useState, useContext, createContext, Children} from "react";
 

const tokenContext = createContext(null)

function UserTokenProvider({ children }){
    const [token, setToken] = useState(null);

    return (
        <tokenContext.Provider value={{token, setToken}}>
            {children}
        </tokenContext.Provider>
    );
}

function UserToken() {
    const context = useContext(tokenContext);
  
    if (!context) {
      throw new Error("useToken deve ser usado dentro de um UserTokenProvider");
    }
  
    return context;
  }

export { UserTokenProvider, UserToken}