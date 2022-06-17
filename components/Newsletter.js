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
            textTransform={"uppercase"}
            fontSize={["lg", "xl", "2xl", "3xl"]}
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
          <Button flex={"1 0 auto"}>Subscribe</Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
