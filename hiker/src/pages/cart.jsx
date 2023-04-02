import { useContext,useEffect,useState } from "react";
import {handleContext} from "../components/contextapi"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import Footer from "../components/footer";
import {Text, 
  Box,
  HStack,
  Link,
  Image, 
  Input,
  Flex, 
  Grid, 
  GridItem, 
  Divider,
  VStack,
  Center,
  Button,
  AspectRatio,
  Container} from "@chakra-ui/react"
const getData=()=>{
  return axios.get(`http://localhost:3000/ecommerce`)
}
function Cart() {
  const navigate=useNavigate()
  const {cartvalue}=useContext(handleContext);
  const {haveid}=useContext(handleContext)
  const [filterarr1,setfilterarr1]=useState([])
  const [total,settotal]=useState(0)
  //console.log(JSON.stringify(haveid))

  const fetchandupdate=async (url)=>{
    try {
        
        let res=await getData()

        console.log(res.data)
        console.log(filtered(res.data))
        setfilterarr1(filtered(res.data))
     console.log(filterarr1)
    } catch (error) {
       console.log(error)
    }
}






const filtered=(data)=>{
let filterarr=data.filter((_,i)=>{ 
  //haveid=JSON.stringify(haveid)
  for(let j=0;j<haveid.length;j++){
    if(+data[i].id===+haveid[j]){
      return data[i]
    }
  }
})
return filterarr
}
useEffect(()=>{
  fetchandupdate(`http://localhost:3000/ecommerce`)
},[])

    //    let sum=0;
    // let  subtotal=filterarr1.forEach((el)=>{
    //   sum+=+el.price-(+el.price*0.25)
    //     settotal( sum)
    //     return total
    // })
    // console.log(subtotal)
   


return(
    
   
      <>
  
              <Center>
              <Box display={"flex" }gap={"10px"}> 
            <Box>
            {filterarr1.map((el)=>{
                return( 
                    <Box >
                     <Flex  padding={"10px"}>
                    <Image maxH="150px"src={el.image} alt={el.type}/>
                    {/* <Link to={`/productpage/${el.id}`}>{el.name}</Link> */}
                    <Box maxH="100px" pt={"20px"}>
                    <Text>{el.name}</Text>
                    <Text>{el.color}</Text>
                    <Text>${el.price-el.price*0.25} </Text>
                    </Box>
                    
                    </Flex>
                   

                    <Divider/>
                        </Box>
                  
                    
                    
                   
                )
            })}
            </Box>
             <Box width="40%"  maxH="300px">
                  <Box as="b" fontSize="2xl">Order Summary</Box>
                  <Box>Subtotal:{total}</Box>
                  <Box>Shipping : $0</Box>
                  <Box>Tax :$0</Box>
                  <Divider/>
                   <Box> <Button onClick={()=>navigate("/checkout")}> Proceed to Checkout</Button></Box>
                </Box>

            </Box>
            </Center>
           
   
    {/* {filterarr1.map((el)=>{
      return <Image src={el.image} alt={el.type}/>
    })} */}

        <Box>
            <Footer/>
        </Box>
    </>
 ) }
  export default Cart;