import { Text, Flex, Container, Box } from "@chakra-ui/react";
import React from "react";
import projects from "./components/data/images/projects.json";

export default function work() {
  return (
    <>
      <Flex direction="column" mt="5rem" spacing={3}>
        <Text textAlign="center" fontSize="2xl">
          Works ive done
          {projects.map((project) => {
            return (
              <Flex>
                <Text>{project.title}</Text>
              </Flex>
            );
          })}
        </Text>
      </Flex>
    </>
  );
}
