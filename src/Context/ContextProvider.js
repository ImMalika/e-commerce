import { AppContext } from './AppContext';
import { useState } from 'react';
export default function ContextProvider ({children}){
    const [menu,setMenu] = useState(false)
    
    return <AppContext.Provider value={{menu,setMenu}}>{children}</AppContext.Provider>
}