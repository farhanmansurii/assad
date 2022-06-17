import {
  Flex,
  Stack,
  Heading,
  Text,
  Input,
  Button,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";

export default function Newsletter() {
  return (
    <Flex mx="3rem" align={"center"} justify={"center"} mt="4rem">
      <Stack
        border="2px solid "
        rounded={"xl"}
        p={10}
        spacing={8}
        align={"center"}
        w="lg"
      >
        <Stack align={"center"} spacing={2}>
          <Text
            fontSize={["3xl", "4xl", "5xl", "5xl"]}
            textTransform="uppercase"
            fontWeight="medium"
            mb="1.5rem"
            fontFamily="Ogg"
          >
            Subscribe
          </Text>
          <Text fontSize={["sm", "sm", "md", "lg"]}>
            Subscribe to my newsletter & stay up to date with my upcoming
            projects and alerts from me !
          </Text>
        </Stack>
        <Stack spacing={4} direction={{ base: "column", md: "row" }} w={"full"}>
          <Input
            type={"text"}
            placeholder={"elon@musk.com"}
            border={"2px"}
            _focus={{
              outline: "none",
            }}
          />
          <Button
            flex={"1 0 auto"}
            color={useColorModeValue("#FBFFF1", "#262626")}
            bg={useColorModeValue("#1EA896", "#e63946")}
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
