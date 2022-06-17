import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { useColorModeValue } from "@chakra-ui/react";
export default function ContactMe() {
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Container align="center">
        <Text
          fontSize={["3xl", "4xl", "5xl", "5xl"]}
          textTransform="uppercase"
          fontWeight="semibold"
          fontFamily="Ogg"
        >
          Contact
        </Text>
        <Text>Fill up the form below to contact</Text>
      </Container>
      <Box>
        <Box p={4}>
          <Wrap spacing={{ base: 6, sm: 3, md: 5, lg: 6 }}>
            <WrapItem>
              <Box>
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                  <VStack
                    pl={0}
                    spacing={3}
                    alignItems="flex-start"
                    fontWeight="light"
                    color={useColorModeValue("#396A64", "#E0D0C1")}
                  >
                    <Button
                      size="md"
                      height="48px"
                      variant="ghost"
                      leftIcon={<MdPhone size="20px" />}
                      color={useColorModeValue("#396A64", "#E0D0C1")}
                    >
                      <Text fontWeight="hairline">+91-9867905275</Text>
                    </Button>

                    <Button
                      size="md"
                      height="48px"
                      variant="ghost"
                      color={useColorModeValue("#396A64", "#E0D0C1")}
                      leftIcon={<MdEmail size="20px" />}
                    >
                      <Text fontWeight="hairline">
                        mansurifarhanfm@gmail.com
                      </Text>
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      variant="ghost"
                      color={useColorModeValue("#396A64", "#E0D0C1")}
                      leftIcon={<MdLocationOn size="20px" />}
                    >
                      <Text fontWeight="hairline">Mumbai , India</Text>
                    </Button>
                  </VStack>
                </Box>
                <HStack
                  mt={{ lg: 10, md: 10 }}
                  spacing={5}
                  px={5}
                  alignItems="flex-start"
                >
                  <IconButton
                    aria-label="facebook"
                    variant="ghost"
                    color={useColorModeValue("#396A64", "#E0D0C1")}
                    icon={<MdFacebook size="28px" />}
                  />
                  <IconButton
                    as="a"
                    aria-label="github"
                    variant="ghost"
                    href="https://github.com/farhanmansurii"
                    color={useColorModeValue("#396A64", "#E0D0C1")}
                    target="_blank"
                    icon={<BsGithub size="28px" />}
                  />
                  <IconButton
                    aria-label="discord"
                    href="farhanmansuri#0961"
                    variant="ghost"
                    color={useColorModeValue("#396A64", "#E0D0C1")}
                    icon={<BsDiscord size="28px" />}
                  />
                </HStack>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box bg="black.300" borderRadius="lg">
                <Box m={8}>
                  <VStack spacing={5}>
                    <FormControl id="name">
                      <FormLabel>Your Name</FormLabel>
                      <InputGroup>
                        <Input type="text" placeholder="Your name " size="sm" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Mail</FormLabel>

                      <InputGroup>
                        <Input
                          type="text"
                          placeholder="yourmail123@gmail.com"
                          size="md"
                          border="1px solid white"
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Message to me !</FormLabel>
                      <Textarea placeholder="message" />
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button
                        variant="solid"
                        _hover={{}}
                        color={useColorModeValue("#FBFFF1", "#262626")}
                        bg={useColorModeValue("#1EA896", "#e63946")}
                      >
                        Send Message
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </Container>
  );
}
