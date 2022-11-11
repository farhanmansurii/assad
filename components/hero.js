import {
  Flex,
  useColorModeValue,
  Text,
  Container,
  ButtonGroup,Stack,IconButton,
  Button,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import dynamic from "next/dynamic";
import React from 'react';
import Spline from '@splinetool/react-spline';
export default function Hero() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [url, setUrl] = React.useState("");
  React.useEffect(() => {
    setIsLoading(false);
    setUrl("https://prod.spline.design/pJUce1tFIbYkKtGO/scene.splinecode");

    return () => {

    }
  }, [])

  const Loader = () => {
    console.log('Loading')
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    )
  }
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
          hi I&apos;m a front-end developer based in Mumbai , India
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

            <Text fontSize="md"  _hover={{ fontsize:'lg'  }} textTransform="lowercase" lineHeight={1}>
              hello welcome to my corner of the internet, where you can find my
              personal projects ,ideas , favourite anime and other random things.
            </Text>
            <ButtonGroup variant="ghost">
            <Stack direction="row " align="center">
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/farhan-mansuri-620918219/"
                target="_blank"
                 color={useColorModeValue("#9CBF9F", "#B7857B")}
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.2rem" />}
              />
              <IconButton
                as="a"
                 color={useColorModeValue("#9CBF9F", "#B7857B")}
                href="https://github.com/farhanmansurii"
                target="_blank"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.2rem" />}
              />
              <IconButton
                as="a"
                href="#"
                 color={useColorModeValue("#9CBF9F", "#B7857B")}
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.2rem" />}
              />
              <IconButton
                as="a"
                color={useColorModeValue("#9CBF9F", "#B7857B")}
                href="mansurifarhanfm@gmail.com"
                icon={<FiMail fontSize="1.2rem" />}
              />
            </Stack>
          </ButtonGroup>
          </Flex>
        </Flex>
        <Container h="250px" w="244px" justify="center">

        <Spline scene="https://prod.spline.design/844BtWLMwWlSucu0/scene.splinecode" />
        </Container>
      </Container></>
  );
}
