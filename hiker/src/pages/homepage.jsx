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

        import Header from "../components/header"
        import Footer from "../components/footer"
         import Admin from "./admin"



function Homepage(){




    return  <>     
                <Box >
                 <Header/>
                 </Box>
         <Box>
            <VStack>
                <Box>
           <Flex align="center" justify="center"> <Image src="https://media.graphassets.com/WnG8r2YZSkKrxCW6ZiEv?format=pjpg&auto=webp" alt="poster1"/> 
        </Flex>
               </Box>  
             
           <Grid  templateColumns='repeat(3, 1fr)'  width={"82%"}>
      <Center>         
  <GridItem w='80%' ><Image src="https://media.graphassets.com/4wmPq1KWS5aGIZQa4Afn?format=pjpg&auto=webp"/></GridItem> 
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/kU8XkunzT1ufeYoCNoR7?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/M2vSSjSFCHO2nAXvp7nA?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/mfeQnZ1ISd6eJkL39LzI?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/brUTxTvT92K7lviboJBS?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/d4aUIv4QLShXRfPry0to?format=pjpg&auto=webp"/></GridItem>
     </Center>
</Grid> 
    <Box>
       <Image src=" https://media.graphassets.com/NZsChZvStmvptMJnDRjx?format=pjpg&auto=webp"/>
    </Box>
        <Box>
         <Flex >
        <Image src="https://media.graphassets.com/2KkW2qWqTSmHBbWUvIuY?format=pjpg&auto=webp"  maxW="200px" maxH="200px"/> 
    
        <Image src="https://media.graphassets.com/s1L165CSN2ZKcQPBbzGv?format=pjpg&auto=webp" maxW="200px" maxH="200px"/> 
        <Image src="https://media.graphassets.com/M7iYzMnfRJOkBNuVkftB?format=pjpg&auto=webp" maxW="200px" maxH="200px"/> 
       
        <Image src="https://media.graphassets.com/Mq338FwhT9yC9cZuWEon?format=pjpg&auto=webp" maxW="200px" maxH="200px"/> 
        
        <Image src="https://media.graphassets.com/RNAEIOosSUCiyTuhm16F?format=pjpg&auto=webp" maxW="200px" maxH="200px"/> 

        <Image src="https://media.graphassets.com/img68BZRQeif4uFfGh9c?format=pjpg&auto=webp" maxW="200px" maxH="200px"/> 
        </Flex>
       </Box>
       <Grid  templateColumns='repeat(3, 1fr)'  width={"82%"}>
      <Center>         
  <GridItem w='80%' ><Image src="https://media.graphassets.com/oPV693GQ5q9htXMruhkr?format=pjpg&auto=webp"/></GridItem> 
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/SIH1JRz2R1aDiGwveLUK?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/wwYOixLISVSmcrvdb7VT?format=pjpg&auto=webp"/></GridItem>
     </Center>
    </Grid> 

    <Box>
        <Image src="https://media.graphassets.com/fVtKkpNdSrG72LqcNBqk?format=pjpg&auto=webp"/>
    </Box>
    <Grid  templateColumns='repeat(5, 1fr)'  width={"82%"}>
      <Center>         
  <GridItem w='80%' ><Image src="https://media.graphassets.com/u8W6tfTuSvrmnj4IPxiA?format=pjpg&auto=webp"/></GridItem> 
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/QdkSpBWcQoSlt819IUB6?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/AEr0LC1S6O1ILKay2MR3?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/W8RkqVRQaC9iNDrC52jc?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/7tIYcTrjTm2WQqi8IPa5?format=pjpg&auto=webp"/></GridItem>
     </Center>
</Grid> 

     <Box >
        <Image src="https://media.graphassets.com/HnAuOno3SNWUOpDvNgXB?format=pjpg&auto=webp" />
    </Box> 
    
    <Grid  templateColumns='repeat(4, 1fr)'  width={"82%"}>
      <Center>         
  <GridItem w='80%' ><Image src="https://media.graphassets.com/JtdemCYvTQ6eOkoE6Zvg?format=pjpg&auto=webp"/></GridItem> 
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/c5KaUulROWvSANwQFcGi?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/0P6fNzzhRgePWG5RSrPJ?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/UYrY9aYqTrKdJU4oE8OI?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/XZym2Oh8SM2pAowuoPEf?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/sBdmxbbWSkyWOdyOTYD1?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/CupO6ryVSijO7jlXzoQ6?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/4zmWcZmRxS92Zy1kAoVJ?format=pjpg&auto=webp"/></GridItem>
     </Center>
</Grid> 

    <Box >
        <Image src="https://media.graphassets.com/hFXaO30RkGwA17dQxFjR?format=pjpg&auto=webp" />
    </Box> 

    <Grid  templateColumns='repeat(4, 1fr)'  width={"82%"}>
      <Center>         
  <GridItem w='80%' ><Image src="https://media.graphassets.com/tgBebAnStKzYuNpeLqvy?format=pjpg&auto=webp"/></GridItem> 
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/CLKwDIQ7R9uNgaPDSm5K?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/AyaHIyxDSIyDlVWN5hSM?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/t4vitlh9T3Gv0MA1F48x?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/vlQ5eKg0QSnjx5t2Zfvx?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/ip0AMGanTMKMe5yw3OVQ?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/pvaSHNmbR7yd8KcANRb9?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/WJHekGRDTm2Rcd9PGVAI?format=pjpg&auto=webp"/></GridItem>
     </Center>
</Grid> 

    <Box >  
        <Center>
        <Image src="https://media.graphassets.com/COuVGSrzQ3sY6FyWjXgW?format=pjpg&auto=webp" maxW="82%"/>
        </Center>
    </Box>
     

    <Grid  templateColumns='repeat(4, 1fr)'  width={"82%"} gap="30px">
      <Center>         
  <GridItem w='80%' ><Image src="https://media.graphassets.com/R4bWfWFeRZaP7lT85d2A?format=pjpg&auto=webp"/></GridItem> 
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/9y53Ex5uSkO2B9rjAT15?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/8tXqnMawRFKHauoYVOcu?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/E1K6i5XHS5GrfFFbz0yA?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/bYQGFeFRfuF8iTDWeQO1?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/J2VTEUSOKRFbjXUik1og?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/SJYzHVhbSJa7kld1z3rP?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/WJHekGRDTm2Rcd9PGVAI?format=pjpg&auto=webp"/></GridItem>
     </Center>
</Grid> 


      {/* this grid is for product logo */}
    
      <Grid  templateColumns='repeat(5, 1fr)' width={"82%"} maxH="300px">
      <Center>         
  <GridItem w='80%' ><Image src="https://media.graphassets.com/e6KAdK1QaK4pII4vgEoB?format=pjpg&auto=webp"/></GridItem> 
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/J4GlZFdQduEebnnLoefI?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/XtJUp945QadnpR3UOFAD?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/gntHeDCgQXu3PWg5G6tc?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/biFpMMcTkuHZyuPrlxFK?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/Z5MqM8ySqyJHzA4xqAqg?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/BxJnkrhDSp6UdZsh0Qkm?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/4wMA8EDTb6EvVqExDbGm?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/ZhYi4jB6TZyzJmADVHwL?format=pjpg&auto=webp"/></GridItem>
     </Center>
     <Center>      
  <GridItem w='80%'   ><Image src="https://media.graphassets.com/eSy612wiTs2nm4xHmIV4?format=pjpg&auto=webp"/></GridItem>
     </Center>
</Grid> 



</VStack>

</Box>
    <Box mt="50px">
   <Footer/> 
   </Box>
    
    </>
}  

export default Homepage