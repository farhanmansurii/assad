import {
  Container,
  Image,
  Flex,
  Text,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import React from "react";

export default function Project() {
  return (
    <>
      <Container w="400px" p="5">
        <Image
          src="https://images.unsplash.com/photo-1653894604359-22dbdb074d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
          borderRadius="xl"
          alt="hi"
        />
        <Flex direction="column" my="1rem">
          <Text fontSize="lg"> Title</Text>
          <Text fontSize="md">Description</Text>
          <Flex fontSize="md" my="0.5rem" justify="space-between">
            <Text> html css javascript </Text>
            <Flex gap="2">
              <a href="/">
                <AiFillGithub size="25px" />
              </a>
              <a href="/">
                <AiOutlineLink size="25px" />
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
