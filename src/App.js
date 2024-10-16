import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { Suspense } from "react";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaMedium,
} from "react-icons/fa";
import { NavLink, Navigate, Route, Routes } from "react-router-dom";

import Container from "components/container";
import NavEntry from "components/naventry";
import { config } from "data";
import HomeContainer from "pages/home";
import PrivacyPolicyContainer from "pages/privacy";
import TeamContainer from "pages/team";
import PuzzleContainer from "pages/puzzle";

const FallbackView = <h1>Loading</h1>;

const ScheduleRedirect = () => {
  window.location.replace(config.scheduleLink);
};

const RegisterRedirect = () => {
  window.location.replace(config.registerLink);
};

const InterestRedirect = () => {
  window.location.replace(config.interestLink);
};

const MenuContent = () => {
  return (
    <>
      <NavEntry link="/" label="home" />
      <NavEntry link="/organizers" label="organizers" />
      {config.isSchedulePublished && (
        <NavEntry link={config.scheduleLink} label="schedule" isExternal />
      )}
      {config.isPuzzlePublished && <NavEntry link="/puzzle" label="puzzles" />}
      {config.isRegistrationPublished && (
        <NavEntry link={config.registerLink} label="register" isExternal />
      )}
      {config.isInterestPublished && (
        <NavEntry link={config.interestLink} label="interest" isExternal />
      )}
    </>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      as="nav"
      bg="secondary"
      color="primary"
      py={4}
      px={0}
      position="fixed"
      width="100vw"
      borderBottom="2px"
      borderColor="black"
      zIndex={9999}
    >
      <Container>
        <Flex alignItems="center">
          <NavLink to="https://icpc.uclaacm.com/" target="_blank">
            <Image
              h="32px"
              src={process.env.PUBLIC_URL + "/assets/branding/acmicpc.svg"}
              alt="ACM ICPC Logo"
            />
          </NavLink>
          <Text fontFamily="heading">&nbsp;&nbsp;&&nbsp;&nbsp;</Text>
          <NavLink to="https://w.uclaacm.com/" target="_blank">
            <Image
              h="32px"
              src={process.env.PUBLIC_URL + "/assets/branding/acmw.svg"}
              alt="ACM W Logo"
            />
          </NavLink>
          <Text fontFamily="heading">&nbsp;&nbsp;presents</Text>
          <Box mx="auto" />
          {!isMobile ? (
            <MenuContent />
          ) : (
            <Stack direction="row">
              {!isOpen && (
                <IconButton
                  ref={btnRef}
                  size="sm"
                  colorScheme="brand"
                  aria-label="Open menu"
                  icon={<TriangleDownIcon />}
                  onClick={onOpen}
                />
              )}
              {isOpen && (
                <IconButton
                  ref={btnRef}
                  size="sm"
                  colorScheme="brand"
                  aria-label="Close menu"
                  icon={<TriangleUpIcon />}
                  onClick={onClose}
                />
              )}
            </Stack>
          )}
          <Drawer
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent bg="secondary" color="primary">
              {/* <DrawerCloseButton /> */}
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <MenuContent />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  );
};

const Footer = () => (
  <Box
    p={3}
    bg="primary"
    color="secondary"
    style={{
      marginBottom: "0px",
      bottom: "0px",
      left: "0px",
      right: "0px",
    }}
  >
    <Container narrow>
      <SimpleGrid minChildWidth="180px" textAlign="center" spacing="16px">
        <Box>
          <Heading my={2} fontSize="sm">
            find us on social media
          </Heading>
          <Stack direction="row" justifyContent="center">
            <Link href="https://www.facebook.com/groups/ucla.icpc" isExternal>
              <Box as={FaFacebook} w={8} h={8} />
            </Link>
            <Link href="https://discord.gg/eWmzKsY" isExternal>
              <Box as={FaDiscord} w={8} h={8} />
            </Link>
            <Link href="https://www.instagram.com/acm.ucla" isExternal>
              <Box as={FaInstagram} w={8} h={8} />
            </Link>
            <Link href="https://medium.com/techatucla" isExternal>
              <Box as={FaMedium} w={8} h={8} />
            </Link>
            <Link href="https://github.com/uclaacm" isExternal>
              <Box as={FaGithub} w={8} h={8} />
            </Link>
          </Stack>
        </Box>
        <VStack>
          <Heading fontSize="sm">reach us at</Heading>
          <Heading
            fontSize="sm"
            fontWeight="regular"
            as="a"
            href="mailto:icpc@uclaacm.com"
          >
            icpc@uclaacm.com
          </Heading>
          <Heading
            fontSize="sm"
            fontWeight="regular"
            as="a"
            href="mailto:w@uclaacm.com"
          >
            w@uclaacm.com
          </Heading>
        </VStack>
        <Box>
          <Button
            as="a"
            href="http://eepurl.com/c5pE6P"
            target="_blank"
            fontFamily="heading"
            fontWeight="semibold"
            size="sm"
            colorScheme="brand"
            variant="solid"
            rounded="lg"
            py={5}
          >
            join the ACM mailing list
          </Button>
          <NavLink
            end
            to="/privacy"
            style={({ isActive }) => ({
              color: isActive ? "#ff5479" : "inherit",
            })}
          >
            <Button
              fontWeight="semibold"
              fontFamily="heading"
              size="sm"
              variant="transparent"
              _hover={{ color: "brand.500" }}
            >
              privacy policy
            </Button>
          </NavLink>
        </Box>
      </SimpleGrid>
      <Box my="16px" />
      <Heading
        width="100%"
        textAlign="center"
        fontSize="sm"
        fontWeight="regular"
      >
        © ACM ICPC at UCLA 2024
      </Heading>
    </Container>
  </Box>
);

const App = () => {
  return (
    <div className="App" style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <Suspense fallback={FallbackView}>
        <Box pt={16}>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            {config.isSchedulePublished && (
              <Route path="/schedule" element={<ScheduleRedirect />} />
            )}
            <Route path="/organizers" element={<TeamContainer />} />
            <Route path="/privacy" element={<PrivacyPolicyContainer />} />
            {config.isPuzzlePublished && (
              <Route path="/puzzle" element={<PuzzleContainer />} />
            )}
            {config.isInterestPublished && (
              <Route path="/interest" element={<InterestRedirect />} />
            )}
            {config.isRegistrationPublished && (
              <Route path="/register" element={<RegisterRedirect />} />
            )}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Box>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
