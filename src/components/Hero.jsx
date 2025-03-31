import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

const NavigationBar = () => {
  return (
    <Flex py={4} align="center" width="100%">
      {/* Logo on the left */}
      <Box>
        <Heading as="h1" size="md" color="orange.500">
          T<Text as="span" color="black">ivro</Text>
        </Heading>
      </Box>
      
      {/* Navigation links centered */}
      <Flex justify="center" flex={1}>
        <HStack spacing={6}>
          <Link>Solutions</Link>
          <Link>Tivro AI</Link>
          <Link>Tivro Partners</Link>
          <Link>About Tivro</Link>
          <Link>Contact Us</Link>
        </HStack>
      </Flex>
      
      {/* Auth buttons on the right */}
      <HStack spacing={4}>
        <Link>Login</Link>
        <Button colorScheme="orange" rounded="md">
          Get Started
        </Button>
      </HStack>
    </Flex>
  );
};

const HeroSection = () => {
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
            <Button colorScheme="orange" size="lg" px={8}>
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

export default HeroSection;