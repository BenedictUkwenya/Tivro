import React from 'react';
import { 
  Box, 
  Button, 
  Flex, 
  Heading, 
  HStack, 
  Text, 
  Image,
  VStack, 
  Container,
  Divider
} from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import CareerAtTirvo from './CareerTirvo';
import OpenRolesSection from './OpenRoleSelection';
import LifeAtTivroSection from './LifeAtTIrvo';
import ApplicationSection from './ReadyToApply';
import RentalEcosystemBanner from './RentalBanner';
import TivroFooter from '../components/Footer';

const MainCareerPage = () => {
  const buttonOrange = '#FF5722';

  const navigate = useNavigate();
  return (
    <Box position="relative" minH="100vh" width="100%">

      {/* Background Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="926px"
        bgImage="url('/maincareer.jpeg')"
        bgSize="cover"
        bgPosition="center"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          w: '100%',
          h: '100%',
          bg: 'rgba(0, 0, 0, 0.65)',
          zIndex: 1
        }}
        zIndex="-1"
      />
      
      {/* Navigation */}
      <Container maxW="container.xl" pt={4}>
        <Flex justify="space-between" align="center" w="100%" py={4} position="relative" zIndex={2}>
          
          {/* Logo */}
          <Flex align="center" ml={{ base: 0, md: 8 }}>
            <Box fontWeight="bold" fontSize="2xl">
<NavLink to='/'><Image src="/logo_converted.png" alt="Tivro Logo" maxW="100px" /></NavLink>

            </Box>
          </Flex>
          
          {/* Navigation Links */}
          <HStack spacing={8} display={{ base: 'none', md: 'flex' }} color="white">
            <NavLink to="/" fontWeight="medium">Home</NavLink>
            <NavLink to="/about" fontWeight="medium">About Tivro</NavLink>
            <NavLink to="/careers" fontWeight="medium">Careers</NavLink>
            <NavLink to="/partners" fontWeight="medium">Tivro Partners</NavLink>
            <NavLink to="/ai" fontWeight="medium">Tivro AI</NavLink>
            <NavLink to="/contact" fontWeight="medium">Contact Us</NavLink>
          </HStack>
          
          {/* CTA Buttons */}
          <HStack spacing={4} mr={{ base: 0, md: 8 }}>
            <Button colorScheme="whiteAlpha" variant="outline" color="white" fontWeight="semibold" onClick={()=>navigate("/login")}>
              Login
            </Button>
            <Button bg={buttonOrange} color="white" fontWeight="semibold" _hover={{ bg: 'orange.500' }}
            onClick={()=>navigate("/signup")}
            >
              Get Started
            </Button>
          </HStack>
        </Flex>
      </Container>
      
      {/* Hero Section */}
      <Container maxW="container.xl" h="calc(100vh - 80px)">
        <Flex direction="column" align="center" justify="center" textAlign="center" h="100%" color="white" position="relative" zIndex="2" px={4}>
          <VStack spacing={6} maxW="container.md">
            <Heading as="h1" size="3xl" fontWeight="bold" lineHeight="1.2">
              Join Our Mission to Revolutionise Housing in Africa and Beyond
            </Heading>
            <Text fontSize="xl" mt={6} maxW="container.sm">
              Be part of a team that's transforming how landlords and tenants connect, verify, and thrive.
            </Text>
            <Button size="lg" bg={buttonOrange} color="white" px={8} py={6} fontSize="md" fontWeight="semibold" mt={8} _hover={{ bg: 'orange.500' }}>
              Explore Opportunities
            </Button>
          </VStack>
        </Flex>
      </Container>

      <OpenRolesSection />
        <Box width="100%" bg="white">
      <CareerAtTirvo />
      </Box>
    <LifeAtTivroSection />
    <ApplicationSection />
    <RentalEcosystemBanner />
    <TivroFooter />
    </Box>
  );
};

export default MainCareerPage;
