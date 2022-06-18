import { Text, Flex } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import Project from "../components/Project";
export default function work() {
  return (
    <>
      {" "}
      <Head>
        <title>My Works </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex direction="column" mt="5rem" spacing={3}>
        <Text
          fontSize={["3xl", "4xl", "5xl", "5xl"]}
          textTransform="uppercase"
          fontWeight="medium"
          textAlign="center"
          fontFamily="Ogg"
        >
          Works ive done
        </Text>
        <Project />
      </Flex>
    </>
  );
}
