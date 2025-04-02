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
  Link,
  useColorModeValue
} from '@chakra-ui/react';

const TirvoAi = () => {
  const bgOverlay = 'rgba(0, 0, 0, 0.65)';
  const primaryColor = '#FF5722'; // Orange color used in the design

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
          <Link href='/'><Image src="/logo_converted.png" alt="Tivro Logo" maxW="100px" /></Link>
          </Heading>
        </Flex>

        {/* Navigation Links - Center */}
        <HStack
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          spacing={8}
          justifyContent="center"
        >
          <Link href="/" color="white" fontWeight="medium">
            Home
          </Link>
          <Link href="/about" color="white" fontWeight="medium">
            About Tivro
          </Link>
          <Link href="/careers" color="white" fontWeight="medium">
            Careers
          </Link>
          <Link href="#" color="white" fontWeight="medium">
            Tivro Partners
          </Link>
          <Link href="/" color="white" fontWeight="medium">
            Tivro AI
          </Link>
          <Link href="/contact" color="white" fontWeight="medium">
            Contact Us
          </Link>
        </HStack>

        {/* Right side buttons */}
        <HStack spacing={4}>
          <Button
            variant="ghost"
            color="white"
            _hover={{ bg: 'whiteAlpha.200' }}
          >
            Login
          </Button>
          <Button
            bg={primaryColor}
            color="white"
            _hover={{ bg: 'orange.600' }}
            borderRadius="md"
            px={6}
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
    </Box>
  );
};

export default TirvoAi;