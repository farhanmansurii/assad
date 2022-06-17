import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Container as ChakraContainer,
  Grid,
  GridItem,
  Link,
  Flex,
} from "@chakra-ui/layout";

import Icon from "@chakra-ui/icon";
import * as tools from "./data/images/tools";
const Skills = () => {
  // convert object properties to array for mapping
  const skills = Object.values(tools).slice(0, 12);
  return (
    <ChakraContainer w="100%" h="70vh" align="center" as="section" mt="3rem">
      <Text
        fontSize={["3xl", "4xl", "5xl", "5xl"]}
        textTransform="uppercase"
        fontWeight="medium"
        mb="1.5rem"
      >
        Skills
      </Text>
      <ChakraContainer
        maxW={{ base: "20rem", sm: "30rem", md: "40rem" }}
        textAlign="center"
        p={0}
        mb="1.5rem"
      >
        <Text>Here are some of the tools I use most frequently.</Text>
      </ChakraContainer>
      <Grid
        m="auto"
        templateColumns={{ base: "repeat(3, 1fr)", md: "repeat(5, 1fr)" }}
        gap={5}
        as="ul"
      >
        {skills.map((skill) => (
          <Skill
            name={skill.name}
            icon={skill.icon}
            color={skill.color}
            key={skill.id}
          />
        ))}
      </Grid>
    </ChakraContainer>
  );
};

const Skill = ({ name, icon, color }) => {
  return (
    <GridItem
      p={{ base: "0.5rem", "2xl": "1rem" }}
      textAlign="center"
      alignContent="center"
      display="flex"
      flexDirection="column"
      listStyleType="none"
      as="li"
    >
      <Icon
        mx="auto"
        mb="0.5rem"
        boxSize={{ base: "2rem", lg: "3rem", "2xl": "4rem" }}
        as={icon}
        _hover={{ fill: color }}
        transitionDuration="500ms"
      />
      {name}
    </GridItem>
  );
};
export default Skills;
