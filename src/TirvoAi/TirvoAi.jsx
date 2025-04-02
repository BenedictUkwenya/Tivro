import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
  Image,
  Badge,
  HStack,
  useColorModeValue
} from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';
import TivroAIFeatures from './AiFeatures';
import TivroAIAssistant from './TirvoAiAssistant';
import FaqSection from '../components/FAQSection';
import TivroAISignup from './Tirvosignup';
import TivroFooter from '../components/Footer';

const TirvoAi = () => {
  const bgOverlay = 'rgba(0, 0, 0, 0.65)';
  const primaryColor = '#FF5722'; // Orange color used in the design
  const navigate = useNavigate()
  return (
    <Box position="relative" minH="100vh">
      {/* Background Image with Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgImage="url('/TirvoAi.jpeg')" 
        bgSize="cover"
        bgPosition="center"
        height="926px"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: bgOverlay,
          zIndex: 1
        }}
        zIndex="-1"
      />

      {/* Navbar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        py={4}
        px={{ base: 4, md: 8 }}
        bg="transparent"
        color="white"
        position="relative"
        zIndex="2"
        maxW="1400px"
        mx="auto"
      >
        {/* Logo */}
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tight">
          <NavLink to='/'><Image src="/logo_converted.png" alt="Tivro Logo" maxW="100px" /></NavLink>
          </Heading>
        </Flex>

        {/* Navigation NavLinks - Center */}
        <HStack
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          spacing={8}
          justifyContent="center"
        >
          <NavLink to="/" color="white" fontWeight="medium">
            Home
          </NavLink>
          <NavLink to="/about" color="white" fontWeight="medium">
            About Tivro
          </NavLink>
          <NavLink to="/careers" color="white" fontWeight="medium">
            Careers
          </NavLink>
          <NavLink to="/partners" color="white" fontWeight="medium">
            Tivro Partners
          </NavLink>
          <NavLink to="/ai" color="white" fontWeight="medium">
            Tivro AI
          </NavLink>
          <NavLink to="/contact" color="white" fontWeight="medium">
            Contact Us
          </NavLink>
        </HStack>

        {/* Right side buttons */}
        <HStack spacing={4}>
          <Button
            variant="ghost"
            color="white"
            _hover={{ bg: 'whiteAlpha.200' }}
            onClick={()=> navigate("/login")}
          >
            Login
          </Button>
          <Button
            bg={primaryColor}
            color="white"
            _hover={{ bg: 'orange.600' }}
            borderRadius="md"
            px={6}
            onClick={()=> navigate("/signup")}
          >
            Get Started
          </Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Container
        maxW="container.xl"
        centerContent
        pt={{ base: 20, md: 32 }}
        pb={{ base: 20, md: 32 }}
        position="relative"
        zIndex="2"
      >
        <Badge
          bg={primaryColor}
          color="white"
          px={4}
          py={2}
          borderRadius="full"
          mb={8}
        >
          Coming Soon
        </Badge>
        
        <Heading
          as="h1"
          size="4xl"
          textAlign="center"
          color="white"
          fontWeight="bold"
          mb={8}
        >
          Be the First to Experience Tivro AI
        </Heading>
        
        <Text
          fontSize="xl"
          textAlign="center"
          color="white"
          maxW="3xl"
          mb={12}
        >
          Join a select group of users who will gain early access to the platform and experience cutting-edge
          tools for finding homes, verifying properties, and getting expert housing insights.
        </Text>
        
        <Flex
          direction={{ base: 'column', md: 'row' }}
          w={{ base: "100%", md: "auto" }}
          maxW="600px"
          spacing={4}
          align="center"
        >
          <Input
            placeholder="Enter your email address"
            bg="white"
            color="gray.800"
            size="lg"
            mr={{ base: 0, md: 4 }}
            mb={{ base: 4, md: 0 }}
            borderRadius="md"
            _placeholder={{ color: 'gray.500' }}
            _focus={{ borderColor: primaryColor }}
          />
          <Button
            bg={primaryColor}
            color="white"
            size="lg"
            _hover={{ bg: 'orange.600' }}
            px={8}
            w={{ base: "100%", md: "auto" }}
            borderRadius="md"
          >
            Join Now
          </Button>
        </Flex>
      </Container>
      <TivroAIFeatures />
      <TivroAIAssistant />
      <FaqSection />
      <TivroAISignup />
      <TivroFooter />
    </Box>
  );
};

export default TirvoAi;