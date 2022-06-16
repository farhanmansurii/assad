import React from "react";
import { Container, Text, Flex } from "@chakra-ui/react/";
import { projects } from "./data/images/projectdata";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
const Project = () => {
  return (
    <Container align="center">
      {projects.map(({ id, title, description, imageSrc, url }) => (
        <Container w="320px" p="2" m="1em">
          <Tilt>
            <Image src={imageSrc} alt={title} />
          </Tilt>
          <Text fontSize="2xl" fontWeight="semibold" m={2}>
            {title}
          </Text>
          <Text fontSize="md" m={1} align="left">
            {description}
          </Text>
          <Flex justify="space-between">
            <Text m={1}> html css javascript </Text>{" "}
            <Link key={id} href={url}>
              <Flex justify="space-between" align="normal" gap="3">
                <AiFillGithub size="32px" mr="3" />
                <AiOutlineLink size="32px" />
              </Flex>
            </Link>
          </Flex>
        </Container>
      ))}
    </Container>
  );
};

export default Project;
