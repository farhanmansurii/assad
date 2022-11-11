import React from "react";
import {
  Container,
  Text,
  Flex,
  useColorModeValue,
  Collapse,
  Button,
  List,
  ListItem,
  Icon,
} from "@chakra-ui/react/";
import { projects } from "./data/images/projectdata";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Project = () => {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);
  return (
    <Flex direction="column" flexWrap="wrap" align="center">
      {projects.map(
        ({ id, title, description, imageSrc, tools, url, live }) => (
          <Container key={id} w="320px" p="2" m="1em">
            <Tilt>
              <Image
                src={imageSrc}
                alt={title} placeholder="blur"
                style={{ borderRadius: "xl", overflow: "hidden" }}
              />
            </Tilt>
            <Text fontSize="2xl" fontWeight="regular" my={2} fontFamily="Ogg">
              {title}
            </Text>
            <Text fontSize="xs" m={1} align="left">
              {description}
            </Text>

            <Flex justify="space-between">
              <Flex direction="column">
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
                <Flex justify="space-between" gap="3">
                  <Text border="2px solid " px="1.4rem" py="0.4rem">
                    <Link href={url}>Source</Link>
                  </Text>
                  <Text
                    border="2px solid "
                    px="1.4rem"
                    py="0.4rem"
                    color="#FBFFF1"
                    bg="#396A64"
                    _dark={{ bg: "#E0D0C1", color: "#262626" }}
                  >
                    <Link href={live}>Live</Link>
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Container>
        )
      )}
    </Flex>
  );
};

export default Project;
