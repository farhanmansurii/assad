import { Text, Flex, Container, Box, Image } from "@chakra-ui/react";
import React from "react";
import projects from "../components/data/images/projects.json";

import { ProjectCard } from "../components/ProjectCard";
import Link from "next/link";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
export default function work() {
  return (
    <>
      <Flex direction="column" mt="5rem" spacing={3}>
        <Text textAlign="center" fontSize="2xl">
          Works ive done
        </Text>
        {projects.map((project) => (
          <ProjectCard
            mb="8rem"
            title={project.title}
            description={project.description}
            live={project.live}
            proto={project.proto}
            repo={project.repo}
            key={project.id}
          />
        ))}
      </Flex>
    </>
  );
}
