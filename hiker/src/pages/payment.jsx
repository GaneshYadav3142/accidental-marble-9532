import { Box,Center,Checkbox, CheckboxGroup,Stack,
          Text,Image, Divider, Flex,FormControl,FormLabel,Input,Button
          

} from "@chakra-ui/react"
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
function Payment(){


    const navigate=useNavigate()
const handleorder=()=>{
    navigate("/");
    alert("Order Placed Successfully")
}

    return (



        <>
        <Box maxW="70%" m="auto" p="50px" border={"2px solid grey"}>
         <Box  p="5px"><Text fontSize="2xl">Payment Method</Text></Box>

         <Box  p="5px"><Text fontSize="xl">Your information is private and secure.</Text></Box>
         <Center  p="5px">
         <Box display={"flex"}><Image src="https://www.ems.com/assets/1e17b54d.svg"/>
         <Image src="https://www.ems.com/assets/6db70e0b.svg"/>
         <Image src="https://www.ems.com/assets/8c29e6cf.svg"/>
         <Image src="https://www.ems.com/assets/e2ef118a.svg"/>
         <Image src="https://www.ems.com/assets/4c78d0d1.svg"/>
         </Box>
         </Center>
         <Center>
         <Box spacing={5} display={"flex"} flexDirection={"column"}>
  <Checkbox colorScheme='red' >
   CreditCard
  </Checkbox>
  <Checkbox colorScheme='green' >
    Paypal
  </Checkbox>
</Box>
</Center>
<Divider/>

<Box  p="50px">

<FormControl isRequired>
           
  <FormLabel>Card Number</FormLabel>
  <Input  type='Number' />
  <Flex  p="50px" spacing={"10px"}>
  <FormLabel>Expiration Date</FormLabel>
  <Input type='Number' placeholder="MM"/>
  <Input type='Number'  placeholder="YY"/>
  <FormLabel>CVV</FormLabel>
  <Input type='Number' />
  </Flex>
  </FormControl>
</Box>

<Box><Button bgColor={"pink.300"} color={"green.700"} onClick={handleorder}>Order Product</Button></Box>


        </Box>
        <Box mt="50px"><Footer/>
        </Box>
        </>
    )
}

export default Payment