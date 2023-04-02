import axios from "axios"
import {Link} from "react-router-dom"
import Footer from "../components/footer"
import Singleproduct from "./singleproductpage"
import {Text, 
    Box,
    Skeleton,
    SkeletonText,
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

    // const handlesingle=(data)=>{
       
    // }

    const {err,data,loading}=state
    return (loading? <Box padding='6' boxShadow='lg' bg='white'><SkeletonText mt='4' startColor='pink.500' endColor='orange.500' noOfLines={10} spacing='7' skeletonHeight='3' /></Box>:
            err? <h1>Something Went Wrong...</h1>:
            <>
            <Box display={"flex"} gap="10px">
                <Box width="25%" border={"1px solid red"}>You have to put filter properties here  </Box>

              
             <Grid   templateColumns='repeat(4, 1fr)' gap="10px" width={"75%"}>
            {data.map((el)=>{
                return(  <GridItem w='100%' border={'1px solid black'} >
                    
                    <Image src={el.image} alt={el.type}/>
                    <Link to={`/productpage/${el.id}`}>{el.name}</Link>
                    <Text>{el.price}</Text>
                  

                    </GridItem>
                )
            })}

            </Grid>
            
            </Box>
            <Box>
            <Footer/>
        </Box>
        </>
    )
}


export default Product