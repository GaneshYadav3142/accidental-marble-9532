import axios from "axios"
import {Link} from "react-router-dom"
import Singleproduct from "./singleproductpage"
import {Text, 
    Box,
    HStack,
    Image, 
    Input,
    Flex, 
    Grid, 
    GridItem, 
    VStack,
    Center,
    AspectRatio,
    Container} from "@chakra-ui/react"
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

    const handlesingle=(data)=>{
       
    }

    const {err,data,loading}=state
    return (loading?<h1>Loading...</h1>:
            err? <h1>Something Went Wrong...</h1>:
            <>
            <Box display={"flex"}>
                <Box width="25%">

                </Box>
             <Grid   templateColumns='repeat(4, 1fr)' gap="10px" width={"75%"}>
            {data.map((el)=>{
                return(  <GridItem w='100%' border={'1px solid black'} >
                    
                    <Image src={el.image} alt={el.type}/>
                    <Link to={`ecommerce/${el.id}`}>{el.name}</Link>
                    <Text>{el.price}</Text>
                  

                    </GridItem>
                )
            })}

            </Grid>
            </Box>
        </>
    )
}


export default Product