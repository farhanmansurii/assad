import { Text, Flex } from "@chakra-ui/react";
import React from "react";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import Project from "../components/Project";
export default function work() {
  return (
    <>
      <Flex direction="column" mt="5rem" spacing={3}>
        <Text textAlign="center" fontSize="2xl">
          Works ive done
        </Text>
        <Project />
      </Flex>
    </>
  );
}
