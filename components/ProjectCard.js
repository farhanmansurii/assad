import {
  Box,
  Center,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { Button } from "@chakra-ui/button";
import PropTypes from "prop-types";
import React from "react";

export const ProjectCard = () => {
  return <div>ProjectCard</div>;
};

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
    <Box
      as="li"
      mb={{ base: "2rem", "2xl": 0 }}
      mx="1rem"
      listStyleType="none"
      border="1px solid"
      w={{ base: "90%", md: "30rem" }}
      {...props}
    >
      <Center borderRadius={0} mb="3rem" w="100%" h="8rem">
        <Heading as="p" variant="h3">
          {title}
        </Heading>
      </Center>
      <VStack px="2rem" align="start" spacing="2rem">
        <Heading data-testid="project-title" as="h3" variant="h3">
          {title}
        </Heading>
        <Text data-testid="project-description">{description}</Text>
        <List display="flex" flexDirection="row"></List>
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
      </VStack>
    </Box>
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
