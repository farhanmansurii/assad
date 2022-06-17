import React from "react";
import {
  Container,
  Text,
  Flex,
  IconButton,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  Button,
} from "@chakra-ui/react/";
import { projects } from "./data/images/projectdata";
import Link from "next/link";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

const Featured = () => {
  return (
    <Flex direction="column" align="center" gap="0" minH="100vh">
      <Text
        fontSize={["2xl", "3xl", "4xl", "4xl"]}
        textTransform="uppercase"
        fontWeight="medium"
        mb="1.5rem"
      >
        My best works
      </Text>
      <Flex direction="row" flexWrap="wrap" align="center" gap="2em">
        {projects
          .slice(0, 2)
          .map(({ id, title, description, imageSrc, tools, url, live }) => (
            <Container key={id} w="300px">
              <Tilt>
                <Image
                  src={imageSrc}
                  alt={title}
                  style={{ borderRadius: "xl", overflow: "hidden" }}
                />
              </Tilt>
              <Text fontSize="xl" fontWeight="semibold" m={2}>
                {title}
              </Text>
              <Text fontSize="xs" m={1} align="left">
                {description}
              </Text>
              <Flex justify="space-between" direction="column">
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

                <Flex justify="space-between" gap="3">
                  <Text border="2px solid " px="1.4rem" py="0.4rem">
                    <Link href={url}>Source</Link>
                  </Text>
                  <Text border="2px solid " px="1.4rem" py="0.4rem">
                    <Link href={live}>Live</Link>
                  </Text>
                </Flex>
              </Flex>
            </Container>
          ))}
      </Flex>
      <Link href="/work">
        <Text mt="2rem" px="5rem" py="0.5rem" borderRadius="xl">
          See more of my works
        </Text>
      </Link>
    </Flex>
  );
};

export default Featured;
