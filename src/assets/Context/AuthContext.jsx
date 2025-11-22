import { createContext, useEffect, useState } from "react";
import { getUserDataApi } from "../../Services/AuthServices";


export const authContext = createContext()
export default function AuthContextProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') != null );
    const [userData, setUserData] = useState(null);
    async function getUserData(){
        const res = await getUserDataApi();
        if(res.message){
            setUserData(res.user)
        }
    }

    useEffect(() => {
      if(isLoggedIn){
        getUserData()
      }

    }, [isLoggedIn])
    


    return <authContext.Provider value={{isLoggedIn ,setIsLoggedIn,userData, setUserData}}>
        {children}
    </authContext.Provider>
}