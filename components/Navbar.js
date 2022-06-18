import { ReactNode } from "react";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";
import "@fontsource/courier-prime";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
const Links = [" about", "work"];
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={children}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        position="fixed"
        top="0"
        width="100%"
        backdropFilter="blur(5px)"
        zIndex="1"
        mb={"4rem"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          mx="10%"
          fontFamily="Courier Prime"
        >
          <Link href="/" ml="">
            Farhan Mansuri
          </Link>

          <Flex alignItems={"center"} fontFamily="Courier Prime">
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              mx="2rem"
            >
              <Link href="/">&lt;home/&gt;</Link>
              <Link href="/about">&lt;about/&gt;</Link>
              <Link href="/work">&lt;work/&gt;</Link>

              <Link
                href="https://drive.google.com/file/d/1I6xWNMNJLKV6A_qhthHE5YbBKcKzJ5vU/view?usp=sharing"
                target="_blank"
              >
                &lt;my_cv/&gt;
              </Link>
            </HStack>

            <Menu
              isLazy
              id="navbar-menu"
              display={["flex", "flex", "none", "none"]}
            >
              <MenuButton
                display={{ base: "flex", md: "none" }}
                as={IconButton}
                icon={<HamburgerIcon />}
                color={useColorModeValue("#FBFFF1", "#262626")}
                bg={useColorModeValue("#1EA896", "#e63946")}
                mx="10%"
                aria-label="Options"
              />
              <MenuList>
                <Link href="/" ml="">
                  <MenuItem>&lt;home/&gt;</MenuItem>
                </Link>
                <Link href="/about" passHref>
                  <MenuItem>&lt;about/&gt;</MenuItem>
                </Link>
                <Link href="/work" passHref>
                  <MenuItem>&lt;work/&gt;</MenuItem>
                </Link>
                <Link
                  href="https://drive.google.com/file/d/1I6xWNMNJLKV6A_qhthHE5YbBKcKzJ5vU/view?usp=sharing"
                  target="_blank"
                >
                  <MenuItem> &lt;my_cv/&gt;</MenuItem>
                </Link>
              </MenuList>
            </Menu>
            <Stack direction={"row"} spacing={7}>
              <Button
                onClick={toggleColorMode}
                color={useColorModeValue("#FBFFF1", "#262626")}
                bg={useColorModeValue("#1EA896", "#e63946")}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
