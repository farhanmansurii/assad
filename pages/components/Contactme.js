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
          fontWeight="medium"
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
                    color={useColorModeValue("#00453d", "#9c795d")}
                    fontWeight="light"
                  >
                    <Button
                      size="md"
                      height="48px"
                      variant="ghost"
                      leftIcon={<MdPhone size="20px" />}
                      color={useColorModeValue("#00453d", "#9c795d")}
                    >
                      <Text fontWeight="hairline">+91-9867905275</Text>
                    </Button>

                    <Button
                      size="md"
                      height="48px"
                      variant="ghost"
                      color={useColorModeValue("#00453d", "#9c795d")}
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
                      color={useColorModeValue("#00453d", "#9c795d")}
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
                  color={useColorModeValue("#c3e3d1", "#9c795d")}
                >
                  <IconButton
                    aria-label="facebook"
                    variant="ghost"
                    icon={<MdFacebook size="28px" />}
                    color={useColorModeValue("#00453d", "#9c795d")}
                  />
                  <IconButton
                    as="a"
                    aria-label="github"
                    variant="ghost"
                    href="https://github.com/farhanmansurii"
                    target="_blank"
                    color={useColorModeValue("#00453d", "#9c795d")}
                    icon={<BsGithub size="28px" />}
                  />
                  <IconButton
                    aria-label="discord"
                    href="farhanmansuri#0961"
                    color={useColorModeValue("#00453d", "#9c795d")}
                    variant="ghost"
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
                        <Input
                          type="text"
                          placeholder="Your name "
                          _placeholder={{
                            color: useColorModeValue("#aa9a8a", "#9c795d"),
                          }}
                          size="sm"
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Mail</FormLabel>

                      <InputGroup>
                        <Input
                          type="text"
                          placeholder="yourmail123@gmail.com"
                          _placeholder={{
                            color: useColorModeValue("#aa9a8a", "#9c795d"),
                          }}
                          size="md"
                          border="1px solid white"
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Message to me !</FormLabel>
                      <Textarea
                        placeholder="message"
                        _placeholder={{
                          color: useColorModeValue("#aa9a8a", "#9c795d"),
                        }}
                      />
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button
                        variant="solid"
                        color={useColorModeValue("#c3e3d1", "#131200")}
                        bg={useColorModeValue("#00453d", "#9c795d")}
                        _hover={{}}
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
