import { Text, Flex, SimpleGrid, Container } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import React from "react";
import Image from "next/image";
import github from "./components/data/images/github2.png";
import Project from "./components/Project";
import { projectsData } from "./components/data/projects";

export default function work() {
  return (
    <Flex direction="column" mt="5rem" spacing={3}>
      <Text textAlign="center" fontSize="2xl">
        {" "}
        Works ive done
      </Text>
      {projectsData &&
        projectsData.map((n) => (
          <Container key={n.id} w="400px" p="5">
            <Image src={github} borderRadius="xl" alt="hi" />
            <Flex direction="column" my="1rem" spacing="1">
              <Text fontSize="lg"> {n.title}</Text>
              <Text fontSize="sm">{n.description}</Text>
              <Flex fontSize="md" my="0.5rem" justify="space-between">
                <Text> {n.technologies} </Text>
                <Flex gap="2">
                  <Link href="/">
                    <AiFillGithub size="25px" />
                  </Link>
                  <Link href="/">
                    <AiOutlineLink size="25px" />
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Container>
        ))}
    </Flex>
  );
}
