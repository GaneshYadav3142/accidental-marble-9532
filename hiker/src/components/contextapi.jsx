import { Children, createContext, useState } from "react";
import Cart from "../pages/cart";

 export const handleContext=createContext()

function HandleContextProvider({children}){
     
    const [cartvalue,setCartvalue]=useState(0)
    const [haveid ,setHaveid]=useState([])
const Cart=(id)=>{
    if(haveid.length==0){
        setHaveid([...haveid,id])
        setCartvalue(cartvalue+1)
    }
//     else if(haveid.length>0){
//    for(let el of haveid){
//     if(el!==id){
//        setHaveid([...haveid,id])
//     }
//    }
     else {
        
        let found=haveid.find(el=>el==id)
        if(found){
            alert("This Item is Already Present")
        }
        else{
            setHaveid([...haveid,id])
            setCartvalue(cartvalue+1)
        }
}
}
console.log(haveid)




    return (
   
    
     <handleContext.Provider value={{Cart, cartvalue,id}}>

       {children}


        </handleContext.Provider>



    )
}

export default HandleContextProvider