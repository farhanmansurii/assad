import { ReactNode } from "react";
import {
  Box,
  Flex,
  Menu,MenuButton,IconButton,MenuList,MenuItem,
  Link,
  Button,
  HStack,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon  ,HamburgerIcon} from "@chakra-ui/icons";
const Links = ["Home", "About", "Projects"];
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} mx='10%'>
          <Box>Farhan Mansuri</Box>

          <Flex alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              mx='2rem'
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
            
            <Menu
                isLazy
                id="navbar-menu"
                display={["flex", "flex", "none", "none"]}
              >
                <MenuButton
                  display={{ base: "flex", md: "none" }}
                  as={IconButton}
                
                  icon={<HamburgerIcon/>}
                  mx='10%'
                  aria-label="Options"
                />
                <MenuList>
                  <Link href="/" ml="">
                    <MenuItem>HOME</MenuItem>
                  </Link>
                  <Link href="/about" passHref>
                    <MenuItem>ABOUT</MenuItem>
                  </Link>
                  <Link href="/work" passHref>
                    <MenuItem>WORKS</MenuItem>
                  </Link>
                  <Link
                    href="https://drive.google.com/file/d/1I6xWNMNJLKV6A_qhthHE5YbBKcKzJ5vU/view?usp=sharing"
                    target="_blank"
                  >
                    <MenuItem>MyCV</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
