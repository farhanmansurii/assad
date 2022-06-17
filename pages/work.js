import { Text, Flex } from "@chakra-ui/react";
import React from "react";

import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import Project from "../components/Project";
export default function work() {
  return (
    <>
      <Flex direction="column" mt="5rem" spacing={3}>
        <Text
          fontSize={["3xl", "4xl", "5xl", "5xl"]}
          textTransform="uppercase"
          fontWeight="medium"
          mb="2rem"
          textAlign="center"
        >
          Works ive done
        </Text>
        <Project />
      </Flex>
    </>
  );
}
