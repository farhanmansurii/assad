import { Text, Flex, SimpleGrid, Container } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import React from "react";
import Project from "./components/Project";

export default function work() {
  return (
    <Flex direction="column" mt="5rem" spacing={3}>
      <Text textAlign="center" fontSize="2xl">
        {" "}
        Works ive done
        <Project />
        <Project />
        <Project />
        <Project />
      </Text>
    </Flex>
  );
}
