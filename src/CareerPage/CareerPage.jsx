import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  Container,
  Link
} from '@chakra-ui/react';
import PartnerSection from './Why';
import AgentSection from './Agent';
import Testimonials from '../components/Testimonials';
import BecomeApart from './BecomeApart';
import FaqSection from '../components/FAQSection';
import TivroFooter from '../components/Footer';
import { useNavigate } from "react-router-dom";

const CareersPage = () => {
  const navigate = useNavigate();
  return (
    <Box position="relative" minH="100vh" width="100%">
      {/* Background Image */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgImage="url('/path-to-your-background-image.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        filter="brightness(0.7)"
        zIndex="0"
      />
      
      {/* Dark Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.5)"
        zIndex="1"
      />
      
      {/* Content Container */}
      <Box position="relative" zIndex="2" width="100%">
        {/* Navigation Bar - using a contained width */}
        <Container maxW="1200px" mx="auto">
          <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            py={4}
          >
            {/* Logo */}
            <Flex align="center">
            <Link href='/'><Image src="/logo_converted.png" alt="Tivro Logo" maxW="100px" /></Link>
            </Flex>
            
            {/* Navigation Links */}
            <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
              <Link color="white" href="/">Home</Link>
              <Link color="white" href="/about">About Tivro</Link>
              <Link color="white" href="/careers">Careers</Link>
              <Link color="white" href="#">Tivro Partners</Link>
              <Link color="white" href="/ai">Tivro AI</Link>
              <Link color="white" href="/contact">Contact Us</Link>
            </HStack>
            
            {/* Login and Get Started Buttons */}
            <HStack spacing={4}>
              <Button colorScheme="whiteAlpha" variant="outline" size="md" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button
                bg="#FF5722"
                color="white"
                _hover={{ bg: "#E64A19" }}
                size="md"
                borderRadius="md"
                onClick={() => navigate("/signup")}
              >
                Get Started
              </Button>
            </HStack>
          </Flex>
        </Container>
        
        {/* Hero Content */}
        <Container maxW="1200px" mx="auto">
          <Flex
            direction="column"
            align="center"
            justify="center"
            textAlign="center"
            h={{ base: "80vh", md: "70vh" }}
            pt={{ base: 16, md: 20 }}
          >
            <Heading
              as="h1"
              size="2xl"
              color="white"
              mb={6}
              fontWeight="bold"
            >
              Join the Tivro Family
            </Heading>
            
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="white"
              maxW="700px"
              mb={10}
            >
              Partner with us to provide secure, efficient, and verified rental solutions for the
              African market. Let's work together to bring trust and transparency to the rental process.
            </Text>
            
            <Button
              bg="#FF5722"
              color="white"
              _hover={{ bg: "#E64A19" }}
              size="lg"
              borderRadius="full"
              px={8}
            >
              Join Tivro Now
            </Button>
          </Flex>
        </Container>
        <PartnerSection />
        <AgentSection />
        <Testimonials />
        <BecomeApart />
        <FaqSection /> 
        <TivroFooter />
      </Box>
    </Box>
  );
};

export default CareersPage;