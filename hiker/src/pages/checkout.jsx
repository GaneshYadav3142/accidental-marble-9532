import { useNavigate } from "react-router-dom";

import Footer from "../components/footer";
import {
    FormControl,
    FormLabel,
    Input,
    Flex,Button,
    FormErrorMessage,
    FormHelperText,
    Select,
    Box
  } from '@chakra-ui/react'

function Checkout(){
    const navigate=useNavigate()
    return (
        <>
        <Box p="50px" mt="50px">
        <Box maxW="80%" margin="auto" p="50px" border="1px solid black" bgcolor="blackAlpha.500">
        <FormControl isRequired>
            <Flex>
  <FormLabel>First name</FormLabel>
  <Input  type='text' />
  <FormLabel>Last Name</FormLabel>
  <Input type='text' />
  </Flex>
  <FormLabel>Country</FormLabel>
  <Input type='text' />
  <FormLabel> Address</FormLabel>
  <Input type='text' />
  <FormLabel>Address line2(Optional)</FormLabel>
  <Input type='text' />
  <Flex p="20px">
  <FormLabel>City</FormLabel>
  <Input type='text' />
  <FormLabel>State</FormLabel>
  <Select placeholder='Select '>
    <option>Mumbai</option>
    <option>Pune</option>
    <option>Delhi</option>
    <option>Chennai</option>
    <option>Hyderabad</option>
    <option>Kolkata</option>
    </Select>
    </Flex>
  <FormLabel>Phone Number</FormLabel>
  <Input type='Number' />
</FormControl>
</Box>
<Box m="20px"><Button bgColor={"pink.300"} color={"green.700"} onClick={()=>navigate("/payment")}>Payment</Button></Box>
</Box>

        <Box mt="50px"><Footer/>
        </Box>
        </>
    )
}

export default Checkout