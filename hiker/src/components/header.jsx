import "./header.module.css"
import logo from "./logo1.png"
import { Box,HStack,Image, Input} from "@chakra-ui/react"
//import logo1 from "../components/logo1"
function Header(){




    return(
            <>

        <Box display="flex"  justifyContent="space-between" px="20px" color="white" bgColor={"black"}>
            <Box>
                <a href="#">Rewards</a>|
                <a href="#">EMS Schools</a>|
                <a href="#">goEast</a>
            </Box>
            <Box>
                <a href="#">Your cart qualifies for Free Ground Shipping</a>|
                <a href="#">Find a Store</a>|
                <a href="#">HELP</a>
            </Box>
        </Box>
        <Box display="flex"  justifyContent={"center"} px="20px" border="1px solid black">
            <HStack>
            <Box><Image boxSize='35px' src="./logo1.png"/></Box>
            <Box><Input  width='500px' size='md' focusBorderColor='pink.400'
    placeholder='Search...'/></Box>
            <Box border="1px solid red">My Accounts and Orders</Box>
            <Box><Image  border="1px solid black" boxSize='35px' src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png"/></Box>
            </HStack>
             

        </Box>

        
            
            
            
            
            
            
        </>




    )
}

export default Header