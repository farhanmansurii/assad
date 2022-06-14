import { Text, Flex, Container, Box, Image } from "@chakra-ui/react";
import React from "react";
import projects from "./components/data/images/projects.json";
import Project from "./components/Project";
import Link from "next/link";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
export default function work() {
  return (
    <>
      <Flex direction="column" mt="5rem" spacing={3}>
        <Text textAlign="center" fontSize="2xl">
          Works ive done
        </Text>
      </Flex>
    </>
  );
}
