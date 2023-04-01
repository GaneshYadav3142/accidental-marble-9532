
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
const getData=async ()=>{
    try {
        let res=await fetch(url);
        let data=await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}




function Singleproduct(){
const {id} =useParams()
const [loading,setLoading]=useState(false);
const [err,setErr]=useState(false)
const [res,setRes]=useState({})













    return (
        <>
        
        
        </>
    )
}

export default Singleproduct 