import React from "react";
import {
  Container,
  Text,
  Flex,
  IconButton,
  List,
  ListItem,
  Icon,
} from "@chakra-ui/react/";
import { projects } from "./data/images/projectdata";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiReact,
  SiNodeDotJs,
  SiNextDotJs,
  SiElectron,
  SiFigma,
  SiStorybook,
  SiAdobe,
  SiSocketDotIo,
  SiTypescript,
} from "react-icons/si";
const Project = () => {
  return (
    <Flex direction="column" flexWrap="wrap" align="center">
      {projects.map(({ id, title, description, imageSrc, tools, url }) => (
        <Container key={id} w="320px" p="2" m="1em">
          <Tilt>
            <Image
              src={imageSrc}
              alt={title}
              style={{ borderRadius: "xl", overflow: "hidden" }}
            />
          </Tilt>
          <Text fontSize="2xl" fontWeight="semibold" m={2}>
            {title}
          </Text>
          <Text fontSize="md" m={1} align="left">
            {description}
          </Text>
          <Flex justify="space-between">
            <Flex>
              <List display="flex" flexDirection="row">
                {tools.map((tool) => (
                  <ListItem key={tool.id} p="0.5rem">
                    <Icon
                      aria-label={tool.name}
                      transitionDuration="400ms"
                      boxSize="1.5rem"
                      as={tool.icon}
                      _hover={{ fill: tool.color }}
                    />
                  </ListItem>
                ))}
              </List>
            </Flex>

            <Link href={url}>
              <Flex justify="space-between" align="normal" gap="3">
                <AiFillGithub size="32px" mr="3" />
                <AiOutlineLink size="32px" />
              </Flex>
            </Link>
          </Flex>
        </Container>
      ))}
    </Flex>
  );
};

export default Project;
