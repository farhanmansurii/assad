import {
    Flex,
    useColorModeValue,
    Text,
    Container,
    Button,
  } from "@chakra-ui/react";
  
  import dynamic from "next/dynamic";

  export default function Hero() {
    return (
      <>
        
          <Text
            mt="5rem"
            mb="3rem"
            pt="0.5rem"
            pb="0.3rem"
            align="center"
            borderRadius="xl"
            bg={useColorModeValue("#ffb07b", "#cf4c2e")}
            color={useColorModeValue("#fffef8", "#141414")}
            mx="20%"
            fontSize="lg"
           
          >
            hi I&apos;m a web developer based in Mumbai , India
          </Text>
          <Container
            centerContent
            display="flex"
            flexDirection={{ base: "column-reverse", md: "row" }}
          >
            <Flex direction="column " w="100%" p="1rem">
              <Text
                fontWeight="light"
                fontSize={["6xl", "6xl", "6xl", "6xl"]}
                
                textTransform="capitalize"
                lineHeight={0.9}
              >
                Farhan Mansuri
              </Text>
  
              <Flex direction="column" w="100%">
                <Text
                  py={3}
                  fontSize="10px"
                  fontWeight="extrabold"
                  textTransform="uppercase"
                  letterSpacing="1px"
                  color={useColorModeValue("#94B49F", "ffb07b")}
                >
                  Digital Craftsman(sometimes artist / web developer/ <br />
                  software tester)
                </Text>
  
                <Text
                  fontSize="lg"
                 
                  textTransform="lowercase"
                  lineHeight={1}
                >
                  hola welcome to my, corner of the internet, where you can find
                  my works, thoughts, favourite anime and other random things.
                </Text>
              </Flex>
            </Flex>
            <Container h="300px" w="244px"  bg='whatsapp.200' justify="center" mt="1rem">
              sasads
            </Container>
          </Container>
        
      </>
    );
  }