import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Button,
  Image,
  Heading,
  useDisclosure,
  IconButton,
  Stack,
  Center,
} from '@chakra-ui/react';
import { NavLink as RouterNavLink } from 'react-router-dom'; 
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import AboutUsSection from './AboutUsSection';
import OurJourneySection from './OurJourney';
import OurGoalSection from './OurGoal';
import CoreValuesSection from './CoreValues';
import AreYouReady from './AreYouReady';
import TivroFooter from '../components/Footer';
import logo from "../assets/logo_converted.png"

// Navigation links
const Links = [
  { name: "Home", path: "/" },
  { name: "About Tivro", path: "/about" },
  { name: "Tivro Partners", path: "/partners" },
  { name: "Tivro AI", path: "/ai" },
  { name: "Contact Us", path: "/contact" }
];

const NavLink = ({ name, path }) => (
  <RouterNavLink
    to={path}
    style={({ isActive }) => ({
      padding: "8px 12px",
      borderRadius: "md",
      textDecoration: "none",
      color: isActive ? "orange" : "black",
    })}
  >
    {name}
  </RouterNavLink>
);

const AboutUsPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh">
      {/* Navigation Bar */}
      <Box bg="white" px={4} boxShadow="sm" position="sticky" top="0" zIndex="10">
        <Flex h={16} alignItems={'center'}>
          {/* Mobile menu button */}
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          
          <Box flex="1" display="flex" justifyContent="flex-start">
            <Image src={logo} alt="Tivro Logo" maxW="100px" />
          </Box>
          
          {/* Navigation - Center */}
          <Center flex="2" display={{ base: 'none', md: 'flex' }}>
            <HStack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.path} name={link.name} path={link.path} />
              ))}
            </HStack>
          </Center>
          
          {/* Login and Get Started - Right side */}
          <Box flex="1" display="flex" justifyContent="flex-end">
            <Flex alignItems={'center'}>
              <RouterNavLink
                to="/login"
                style={{
                  marginRight: "16px",
                  fontWeight: "medium",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Login
              </RouterNavLink>
              <Button
                variant={'solid'}
                bg="orange.500"
                color="white"
                _hover={{ bg: 'orange.600' }}
                size={'md'}
                as={RouterNavLink}
                to="/signup"
              >
                Get Started
              </Button>
            </Flex>
          </Box>
        </Flex>

        {/* Mobile menu */}
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.path} name={link.name} path={link.path} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* Hero Section with Background Image */}
      <Box
        w="100%"
        h="80vh"
        position="relative"
        bgImage="url('/about-us-hero.jpg')"
        bgSize="cover"
        bgPosition="center"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bg="blackAlpha.600"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Heading size="2xl" color="white" fontWeight="bold">
            About Us
          </Heading>
        </Box>
      </Box>
      <Box py={20}>
        <AboutUsSection />
        <OurJourneySection />
        <OurGoalSection />
        <CoreValuesSection />
        <AreYouReady />
        <TivroFooter />
      </Box>
    </Box>
  );
};

export default AboutUsPage;
