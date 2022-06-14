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
        {projects.map((project) => {
          return (
            <Container w="400px" p="5">
              <Image
                src="https://images.unsplash.com/photo-1653894604359-22dbdb074d4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                borderRadius="xl"
                alt="hey
            "
              />
              <Flex direction="column" my="1rem">
                <Text fontSize="lg"> {project.title}</Text>
                <Text fontSize="md">{project.description}</Text>
                <Flex fontSize="md" my="0.5rem" justify="space-between">
                  <Text> {project.tools} </Text>
                  <Flex gap="2">
                    <Link href={project.live}>
                      <AiOutlineLink size="25px" />
                    </Link>
                    <Link href="/">
                      <AiFillGithub size="25px" />
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            </Container>
          );
        })}
      </Flex>
    </>
  );
}
