import {
  Flex,
  useColorModeValue,
  Text,
  Container,
  Button,
} from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import React from 'react';
export default function Hero() {
  return (
    <>
      <Flex justify="center" mx="5%" mt="4.2rem">
        <Text
          mt="1rem"
          px="2rem"
          pt="0.5rem"
          pb="0.5rem"
          align="center"
          borderRadius="2xl"
          color={useColorModeValue("#FBFFF1", "#262626")}
          bg={useColorModeValue("#1EA896", "#e63946")}
          fontSize={["xs", "sm", "sm", "md"]}
        >
          hi I&apos;m a web developer based in Mumbai , India
        </Text>
      </Flex>
      <Container
        minH="75vh"
        w="90%"
        centerContent
        display="flex"
        flexDirection={{ base: "column-reverse", md: "row" }}
        justifyContent="space-around"
      >
        <Flex direction="column " w="100%" p="1rem">
          <Text
            fontFamily="Ogg"
            fontSize={["5xl", "5xl", "6xl", "6xl"]}
            textTransform="capitalize"
            lineHeight={0.9}
            color={useColorModeValue("#619465", "#A76D60")}
          >
            Farhan
          </Text>
          <Text
            fontFamily="Ogg"
            fontSize={["5xl", "5xl", "6xl", "6xl"]}
            textTransform="capitalize"
            lineHeight={0.9}
            fontStyle="italic"
            fontWeight="normal"
            color={useColorModeValue("#9CBF9F", "#B7857B")}
          >
            mansuri
          </Text>

          <Flex direction="column" w="100%">
            <Text
              py={3}
              fontSize="10px"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="1px"
              color={useColorModeValue("#B5CFB7", "#B7857B")}
            >
              Digital Craftsman(sometimes artist / web developer/ <br />
              software tester)
            </Text>

            <Text fontSize="md" textTransform="lowercase" lineHeight={1}>
              hola welcome to my, corner of the internet, where you can find my
              works, thoughts, favourite anime and other random things.
            </Text>
          </Flex>
        </Flex>
        <Container h="250px" w="244px" justify="center">
            <Spline scene="https://prod.spline.design/pJUce1tFIbYkKtGO/scene.splinecode" /> 
        </Container>
      </Container></>
  );
}
