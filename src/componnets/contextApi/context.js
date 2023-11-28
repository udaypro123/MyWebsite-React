import { createContext,useState } from "react";


export const globaldata=createContext();

function ContextProvider({children}){

    const [data, setdata]=useState()
    const [subjectdata, setSubjectdata]=useState()
    const [selcteditem, setSelcteditem]=useState()
    const [menu, setmenu]=useState(false)
    return <globaldata.Provider value={{data, setdata,menu, setmenu,subjectdata, setSubjectdata,selcteditem, setSelcteditem}}>
        {children}
    </globaldata.Provider>
}

export default ContextProvider;


