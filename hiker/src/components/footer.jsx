import {Text, VStack,Box,HStack,Image, Input,Flex,Container} from "@chakra-ui/react"
import {CgInstagram,CgTwitter} from "react-icons/cg"
import {IoLogoYoutube} from "react-icons/io"

function Footer(){



    return <>
    
    <Box bgColor="#313F35" color="#fff" >
    
       
            <Flex justifyContent="space-evenly" padding="20px">
              <VStack spacing="10px">
                <h2>GET TO KNOW US</h2>
                <a href="#">About</a> 
                <a href="#"> Affiliate program</a>
                <a href="#">Career</a>
                <a href="#">Partners</a>
                <a href="#">Expert Advice</a>
                <a href="#">goEast Community</a>
                </VStack>
                <VStack spacing="10px">
                <h2>IN THE SPOTLIGHT</h2>
                    <a href="#">Rewards Program</a>
                    <a href="#">Deals</a>
                    <a href="#">News</a>
                    <a href="#">Outlet & Clearance</a>
                    <a href="#">Shop by Brand</a>
                    <a href="#">Sale</a>
                </VStack>
                <VStack spacing="10px">
                <h2>OUR STORES</h2>
                    <a href="#">Find a store</a>
                    <a href="#">EMS Schools</a>
                    <a href="#">In Store Rentals</a>
                </VStack>
                <VStack spacing="10px">
                <h2>HELP CENTER</h2>
                    <a href="#">Customer Service</a>
                    <a href="#">Reward Help</a>
                    <a href="#">Shipping</a>
                    <a href="#">Returns</a>
                    <a href="#">California Policies</a>
                    <a href="#">Contact Us</a>
                </VStack>
                <VStack spacing="10px" >
                    <h3>SIGN UP FOR EMAILS</h3>
                    <Input type="email" placeholder="ENTER YOUR EMAIL"/>
                   <Container  centerContent width="sd">By signing up you agree toreceive<br/> promotional 
                        emails from EMS, you agree <br/>
                        with our terms and conditions and that <br/>
                        you have read our privacy policy<br/>
                        </Container>
                </VStack>
               
                </Flex>
                <hr size="md"/>
                 <Box  display={"flex"} justifyContent={"space-evenly"} padding="10px" spacing="10px">
                    <CgTwitter />
                    <CgInstagram/>
                    <IoLogoYoutube/>

                <Text>Copyright © 2023 Eastern Mountain Sports. All Rights Reserved · Privacy Policy · Terms & Conditions</Text>
                 </Box>


    </Box>
    
    
    
    </>
}


export default Footer