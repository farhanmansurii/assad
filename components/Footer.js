import React from "react";
import {
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Stack,
  useColorModeValue,
  Text,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
export default function Footer() {
  return (
    <Container centerContent>
      <Flex
        pt={{ base: "10", md: "14" }}
        ml="1rem"
        mr="1.8rem"
        bottom={0}
        borderTop="2px solid "
        fontFamily="Ogg"
      ></Flex>
      <Divider orientation="horizontal" my="2rem" color="red" />
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-around" direction="column" align="center">
          <ButtonGroup>
            <Stack direction="row" fontSize="1.25rem">
              <Link href="/">home</Link>
              <Link href="/about">about</Link>
              <Link href="/work">projects</Link>
              <Link href="/contact">contact</Link>
            </Stack>
          </ButtonGroup>
          <ButtonGroup variant="ghost">
            <Stack direction="row " align="center">
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/farhan-mansuri-620918219/"
                target="_blank"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.2rem" />}
              />
              <IconButton
                as="a"
                href="https://github.com/farhanmansurii"
                target="_blank"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.2rem" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.2rem" />}
              />
              <IconButton as="a" href="" icon={<FiMail fontSize="1.2rem" />} />
            </Stack>
          </ButtonGroup>
        </Stack>
        <Flex direction="row" gap="1">
          <Text fontSize="sm" color="subtle" align="center" mb="2rem">
            &copy; 2022 designed & coded with ♥ by farhan mansuri
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
