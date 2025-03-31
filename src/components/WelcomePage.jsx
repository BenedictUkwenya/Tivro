import React from 'react';
import FeaturesSection from './FeaturesSection';
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  HStack,
  Link,
  Text,
} from '@chakra-ui/react';
import TestimonialsSection from './Testimonials';
import FaqSection from './FAQSection';
import Footer from './Footer';
import logo from "../assets/logo_converted.png"

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <Flex py={4} align="center" width="100%">
      <Box>
        <Heading as="h1" size="md" color="orange.500">
           <Image src={logo} alt="Tivro Logo" maxW="100px" />
        </Heading>
      </Box>
      
      <Flex justify="center" flex={1}>
        <HStack spacing={6}>
          <Link>Solutions</Link>
          <Link>Tivro AI</Link>
          <Link>Tivro Partners</Link>
          <Link href='/about'>About Tivro</Link>
          <Link>Contact Us</Link>
        </HStack>
      </Flex>
      
      <HStack spacing={4}>
        <Link  href="/login">Login</Link>
        <Button colorScheme="red" rounded="md" onClick={() => navigate("/signup")}>
      Get Started
    </Button>
      </HStack>
    </Flex>
  );
};

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <Box bg="gray.800" minH="90vh">
      <Container maxW="container.xl">
        <NavigationBar />
        
        <Flex 
          direction="column" 
          align="center" 
          justify="center" 
          textAlign="center"
          py={20}
          px={4}
        >
          <Box 
            bg="orange.500" 
            color="white" 
            px={4} 
            py={1} 
            rounded="full" 
            fontSize="sm"
            mb={6}
          >
            Verify Tenants, Secure Homes
          </Box>
          
          <Heading 
            as="h1" 
            size="2xl" 
            mb={4} 
            lineHeight="1.2"
            maxW="container.md"
            color="white"
          >
            Building Trust Between Landlords and Tenants in{" "}
            <Text as="span" color="orange.500" fontStyle="italic">
              Africa
            </Text>
          </Heading>
          
          <Text 
            fontSize="lg" 
            maxW="container.sm" 
            mb={10}
            color="gray.600"
          >
            Whether you're a landlord looking for trustworthy tenants or a tenant seeking
            verified homes, TIVRO ensures credibility, and peace of mind for all.
          </Text>
          
          <HStack spacing={4}>
            <Button colorScheme="orange" size="lg" px={8} onClick={() => navigate("/signup")}>
              Get Started
            </Button>
            <Button variant="outline" size="lg" px={8} rightIcon={<Box as="span">→</Box>}>
              Learn More
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

// Blank white section that appears when scrolling
const BlankSection = () => {
  return (
    <Box bg="white" minH="100vh" width="100%">
      {/* This is an intentionally blank section */}
    </Box>
  );
};

const WelcomePage = () => {
  return (
    <Box>
      <HeroSection />
      <BlankSection />
      <FeaturesSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </Box>
  );
};

export default WelcomePage;