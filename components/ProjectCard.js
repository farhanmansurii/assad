import {
  Box,
  Center,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  Container,
  Flex,
} from "@chakra-ui/layout";
import git from "./data/images/github2.png";
import { Button } from "@chakra-ui/button";
import PropTypes from "prop-types";
import React from "react";
import Image from "next/dist/client/image";
export const ProjectCard = ({
  headr,
  title,
  description,
  tools,
  live,
  source,
  proto,
  repo,
  ...props
}) => {
  return (
    <Container w="400px" p="5">
      <Image src={git} />
      <Flex direction="column" my="1rem">
        <Text fontSize="lg"> {title}</Text>
        <Text fontSize="md">{description}</Text>
        <List display="flex" flexDirection="row">
          {" "}
          <Text> html css javascript </Text>{" "}
        </List>
        <HStack pb="2rem">
          {live && (
            <Button as="a" href={visit} variant="primary">
              Visit Site
            </Button>
          )}
          {proto && (
            <Button as="a" href={visit} variant="primary">
              Prototype
            </Button>
          )}
          {source && (
            <Button as="a" href={source} variant="secondary">
              View Code
            </Button>
          )}
        </HStack>
      </Flex>
    </Container>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.element,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  live: PropTypes.string,
  proto: PropTypes.string,
  repo: PropTypes.string.isRequired,
};
