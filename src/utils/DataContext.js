import { createContext } from "react";
import { useState } from "react";

const DataContext = createContext({})

export const DataProvider = ({children})=>{
    const [searchText,setSearchText] = useState("")
    return(<DataContext.Provider value={{searchText,setSearchText}}>{children}</DataContext.Provider>)
}
export default DataContext