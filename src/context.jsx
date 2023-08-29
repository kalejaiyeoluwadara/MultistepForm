import React,{useContext,useState} from 'react'
const AppContext = React.createContext();
function AppProvider({children}) {
    const [page1,setPage1] = useState(true);
    const [page2, setPage2] = useState(false);
    const [page3, setPage3] = useState(false);
    const [page4, setPage4] = useState(false);
    const [on, setOn] = useState(false);
    const [log,setLog] = useState([])
    const [plan,setPlan] = useState('')
    const [prize,setPrize] = useState(0)
    const controller = (a=false,b=false,c=false,d=false) =>{
            setPage1(a)
            setPage2(b)
            setPage3(c)
            setPage4(d)
    }
  return (
   <AppContext.Provider value={{
       controller,
       prize,setPrize,
       log,setLog,on,setOn,
        page1,
        plan,setPlan,
        setPage1,
        page2, 
        setPage2,
        page3, 
        setPage3,
        page4, 
        setPage4,
   }} >
    {children}
   </AppContext.Provider>
  )
}
export const useGlobal = () =>{
    return(useContext(AppContext))
}

export default AppProvider
