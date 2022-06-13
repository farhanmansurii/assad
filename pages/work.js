import { Text, Flex, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Project from "./components/Project";
const title = ["hi ", " hello "];
export default function work() {
  return (
    <Flex direction="column" mt="5rem" spacing={3}>
      <Text textAlign="center" fontSize="2xl">
        {" "}
        Works ive done
      </Text>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </Flex>
  );
}
