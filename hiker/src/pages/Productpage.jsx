import axios from "axios"
import {useReducer,useEffect} from "react"
const initState={
   loading:false,
   data:[],
   err:false
 }

 const getData=()=>{
    return axios.get(`http://localhost:3000/ecommerce`)
 }

 const reducer=(state,action)=>{
    switch(action.type){
        case "FETCH_SUCCESS":{
            return{
                loading:false,
                err:false,
                data:action.payload
            }
        }
        case "FETCH_LOADING":{
            return{
            loading:true,
            data:[],
            err:false
            }
        }
        case "FETCH_ERR":{
            return{
                loading:false,
                err:true,
                data:[]
            }
        }
        default:{
            throw new Error("Invalid Action type")
        }
    }
 }

function Product(){

    const [state,dispatch]=useReducer(reducer,initState)

    const fetchandupdate=async (url)=>{
        try {
            dispatch({type:"FETCH_LOADING"})
            let res=await getData()

            console.log(res.data)
            dispatch({type:"FETCH_SUCCESS",payload:res?.data})
        } catch (error) {
            dispatch({type:"FETCH_ERR"})
        }
    }


    useEffect(()=>{
        fetchandupdate(`http://localhost:3000/ecommerce`)
    },[])

    const {err,data,loading}=state
    return (loading?<h1>Loading...</h1>:
            err? <h1>Something Went Wrong...</h1>:
            <>
            {data.map((el)=>{
                return(<div>
                    <img src={el.image} alt={el.type}/>
                    <h2>{el.name}</h2>
                    <h4>{el.price}</h4>
                    </div>
                )
            })}
        </>
    )
}


export default Product