
import { handleContext } from "../components/contextapi"
import {useContext} from "react"
import {FaUserAlt,FaShoppingCart} from "react-icons/fa"
import Footer from "../components/footer"
import {Text, 
    Box,
    HStack,
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
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
const getData=async (url)=>{
    try {
        let res=await fetch(url);
        let data=await res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}




function Singleproduct(){
    const {Cart}=useContext(handleContext)

   console.log(Cart)
const {id} =useParams()

const [loading,setLoading]=useState(false);
const [err,setErr]=useState(false)
const [res,setRes]=useState({})

const fetchandupdate=(url)=>{
    setLoading(true);
    getData(url)
    .then((res)=>{
        setRes(res)
    }).catch((err)=>{
        setErr(true)
    }).finally(()=>{
        setLoading(false)
    })
}
// "name": "EMS Men's Feather Pack Hooded Jacket",
// "title": "Hoodie",
// "image": "https://res.cloudinary.com/eastern/image/upload/w_1000,q_auto,f_auto/2062309_402_main.jpg",
// "price": "250",
// "category": "MEN",
// "size": "XL",
// "brand": "NIKE",
// "type": "jacket",
// "color": "blue",
// "id": 1

useEffect(()=>{
    fetchandupdate(`http://localhost:3000/ecommerce/${id}`)
},[id])
    return ( loading?<h1>Loading...</h1>:err?<h1>Something Went Wrong</h1>:
        <>
        <Box>
        <Grid   linespacing="20px" templateColumns='repeat(3, 1fr)' gap="10px" width={"100%"}>    
        <GridItem w='100%' > <Box >
        <Image  maxW="600px"src={res.image} alt={res.title}/>
        </Box></GridItem>
       
        
        <GridItem w='100%' >
        <Box>
        <Text fontSize='4xl' color={"blackAlpha.600"}>{res.brand}</Text> 
        <Text fontSize='3xl'>{res.name}</Text>   
        {/* //<Text>{res.title}</Text>   
        //<Text>{res.category}</Text>    */}
       <Divider />
          <Text fontSize='3xl'>Color : {res.color}</Text> 
          <Divider />
        <Text   fontSize='3xl'>Size :{res.size}</Text>   
        <Divider />

         {/* <Text>Product type:{res.type}</Text>   */}
         <Text fontSize='2xl' color={"blackAlpha.600"}>However you stay active, you know you are
bound to sweat. Perspiration, then, seeps t…
</Text>
<Divider />
        </Box> 
        </GridItem>
        {/* cart button to be included in this section */}
       <GridItem w='90%' maxH="400px" border={'1px solid black'} spacing="7"><Box> 
        <Box ><Text as="b" color={"pink.400"} fontSize={"5xl"}>${res.price-res.price*0.25}</Text>   <Text as='del' color={"green.200"} fontSize={"2xl"}>${res.price}</Text></Box>
        <Box fontSize='xl'color={"green.200"}>You save {res.price*0.25} (25%)</Box>
        <Divider/>
         <Box><Text  fontSize='2xl'> Your cart qualifies for free shipping</Text></Box>
         <Divider/>
         <Box><Text  fontSize='2xl'>You can earn points on this purchase through our rewards program.</Text></Box>
         <Divider/>
        <Box p="20px"><Button color={"green.700"}  onClick={()=>Cart(id) }> <FaShoppingCart/>Add to cart</Button> </Box>
        
        
        
        </Box></GridItem>
        
      
        <GridItem w='100%'  ><Box> <Text  color={"black"}><Box as="b">Description:</Box>
        <Box>However you stay active, you know you are bound to sweat. Perspiration, then, seeps through your clothing, making you feel uncomfortable and ultimately slowing you down toward achieving your next goal, whether that's a greater distance or a faster speed. For staying dry and focusing on your performance, that's where this shirt comes in. Its short-sleeve textured knit design delivers just the stretch you require, while Techwick works to wick away moisture, offers crucial UV protection, and inhibits bacterial growth. Part of the EMS Hydro Series, this outdoor essential dries quickly and offers water-friendly construction for an even greater range of usage.</Box>

 </Text></Box></GridItem>
        
        <GridItem w='100%'  border={'2px solid blackAlpha.600'} ><Box>
            <Box as="b">Attribute:</Box>
            <Box spacing="5px" border={'1px solid black'}>
            <Box><b>Country of Origin :</b>	Imported</Box>
            <Box><b>Material :	</b>Polyester</Box>
            <Box><b>Additional Features :	</b>Antimicrobial`UV protective`Stretch`Quick drying`Wicking</Box>
            <Box><b>Style Number :</b>	2073282</Box>
            <Box><b>Product SKU :	</b>35438100080</Box>
            </Box>
           

            </Box></GridItem>
        <GridItem w='100%'  ><Box>
        <Box as="b">Shipping & Returns</Box>
            <Box  border={'1px solid black'}>
            <Box as="b">Quick Delivery</Box>

            <Box as="b">Easy Returns, Refunds & Exchanges</Box>
            </Box>
            
            </Box></GridItem>
        
        
        
        
        </Grid>
        </Box>
        <Box>
            <Footer/>
        </Box>
        </>
    )
}

export default Singleproduct 