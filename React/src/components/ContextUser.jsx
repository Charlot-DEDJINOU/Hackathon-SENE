import { createContext } from "react";
import { useState } from "react";

const utilisateur=JSON.parse(localStorage.getItem('utilisateur'))

export const UserContext=createContext()

export const UserProvider=({children})=>{

    const [isLogin,setLogin]=useState(utilisateur!=null)
    const [notifications, setNotifications] = useState([]);
    
    const toggleLogin=()=>{
        setLogin(!isLogin)
    }

    const [discussion , setdiscussion] = useState(true)
    const togglediscussion=()=>{
        setdiscussion(!discussion)
    }

    const [showCheck,SetShowingCheck]=useState(false)
    const handleCloseCheck = () => SetShowingCheck(false);
    const handleShowCheck = () => SetShowingCheck(true);

    const [page,setpage]=useState(false)
    const togglepage=(etat)=>setpage(etat) ;

    const [isbuy,setisbuy]=useState(false) ;
    const togglebuy=(etat)=>setisbuy(etat) ;

    const [showimage , setimage] = useState([false,""])
    const toggleimage = (url) => {
        setimage([!showimage[0],url])
    }

    return (
        <UserContext.Provider value={{ showimage , toggleimage ,isLogin, toggleLogin , discussion , togglediscussion , showCheck,handleCloseCheck,handleShowCheck,togglepage,page,togglebuy,isbuy , notifications}}>
            {children}
        </UserContext.Provider>
    )
}
