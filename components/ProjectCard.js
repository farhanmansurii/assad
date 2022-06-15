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
import Icon from "@chakra-ui/icon";
import { Button } from "@chakra-ui/button";
import PropTypes from "prop-types";
import React from "react";

export const ProjectCard = ({
  title,
  description,
  tools,
  live,
  proto,
  repo,
  ...props
}) => {
  return (
    <Container w="400px" p="5">
      <Flex direction="column" my="1rem">
        <Text fontSize="lg"> {title}</Text>
        <Text fontSize="md">{description}</Text>
        <List display="flex" flexDirection="row">
          {" "}
          <Text> html css javascript </Text>{" "}
        </List>
        <HStack pb="2rem">
          {live && (
            <Button as="a" href={live} variant="primary">
              Visit Site
            </Button>
          )}
          {proto && (
            <Button as="a" href={proto} variant="primary">
              Prototype
            </Button>
          )}
          <Button as="a" href={repo} variant="secondary">
            View Code
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.element,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  live: PropTypes.string,
  proto: PropTypes.string,
  repo: PropTypes.string.isRequired,
};
