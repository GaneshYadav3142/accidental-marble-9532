import "./header.css"
import {FaUserAlt,FaShoppingCart} from "react-icons/fa"

import logo from "./logo1.png"
import {Text, Box,HStack,Image, Input,Flex} from "@chakra-ui/react"
//import logo1 from "../components/logo1"
function Header(){




    return(
            <>
                           
        <Box display="flex"  justifyContent="space-between" px="20px" color="white" bgColor="#313F35">
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
        <Box display="flex"  justifyContent="space-evenly" padding={"10px 10px"} border="1px solid black">
           
            <Box><Image boxSize='35px' src={require("./logo1.png")}/></Box>
            <Box><Input  width='500px' size='md' focusBorderColor='pink.400'
    placeholder='Search...'/></Box>
          <Text fontSize='xl'> <FaUserAlt/> My Accounts</Text>
           <Text fontSize='xl'> <FaShoppingCart/>Cart</Text>
        </Box> 
      <Flex justifyContent="space-evenly" bgColor="#fff" border="1px solid black">
        <div className="dropdown">
      <button className="dropbtn">MEN</button>
      <div className="dropdown-content">
        <a href="#home">Link1</a>
        <a href="#home">Link2</a>
        <a href="#home">Link3</a>
        <a href="#home">Link4</a>
      </div>
      </div>
      <div className="dropdown">
      <button className="dropbtn">WOMEN</button>
      <div className="dropdown-content">
        <a href="#home">Link1</a>
        <a href="#home">Link2</a>
        <a href="#home">Link3</a>
        <a href="#home">Link4</a>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">KIDS</button>
      <div className="dropdown-content">
        <a href="#home">Link1</a>
        <a href="#home">Link2</a>
        <a href="#home">Link3</a>
        <a href="#home">Link4</a>
      </div>
    </div>
     <div className="dropdown">
      <button className="dropbtn">FOOTWEAR</button>
      <div className="dropdown-content">
        <a href="#home">Link1</a>
        <a href="#home">Link2</a>
        <a href="#home">Link3</a>
        <a href="#home">Link4</a>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">CAMP & HIKE</button>
      <div className="dropdown-content">
        <a href="#home">Link1</a>
        <a href="#home">Link2</a>
        <a href="#home">Link3</a>
        <a href="#home">Link4</a>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">CLIMB</button>
      <div className="dropdown-content">
        <a href="#home">Link1</a>
        <a href="#home">Link2</a>
        <a href="#home">Link3</a>
        <a href="#home">Link4</a>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">SNOW</button>
      <div className="dropdown-content">
        <a href="#home">Link1</a>
        <a href="#home">Link2</a>
        <a href="#home">Link3</a>
        <a href="#home">Link4</a>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">CYCLE</button>
      <div className="dropdown-content">
        <a href="#home">Link1</a>
        <a href="#home">Link2</a>
        <a href="#home">Link3</a>
        <a href="#home">Link4</a>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">ACTIVITIES</button>
      <div className="dropdown-content">
        <a href="#home">Link1</a>
        <a href="#home">Link2</a>
        <a href="#home">Link3</a>
        <a href="#home">Link4</a>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">BRANDS</button>
      <div className="dropdown-content">
        <a href="#home">Link1</a>
        <a href="#home">Link2</a>
        <a href="#home">Link3</a>
        <a href="#home">Link4</a>
      </div>
    </div>
    <div className="dropdown">
      <button className="dropbtn">SALE & OUTLET</button>
      <div className="dropdown-content">
        <a href="#home">Link1</a>
        <a href="#home">Link2</a>
        <a href="#home">Link3</a>
        <a href="#home">Link4</a>
      </div>
    </div>
    </Flex>



      




    </>




    )
}

export default Header