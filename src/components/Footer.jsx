import React from 'react';
import { 
  Box, 
  Container, 
  Flex, 
  Text, 
  HStack, 
  VStack, 
  Link, 
  Icon,
  SimpleGrid
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const TivroFooter = () => {
  return (
    <Box bg="black" color="white" py={10}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8}>
          {/* Logo and Description */}
          <VStack align="flex-start" spacing={4}>
            <Flex align="center">
              <Box color="orange.500" fontWeight="bold" fontSize="2xl">T</Box>
              <Text fontSize="2xl" fontWeight="bold">ivro</Text>
            </Flex>
            <Text fontSize="sm">
              Tivro bridges the gap between landlords and tenants with seamless 
              verification and trusted property inspection, ensuring secure and 
              efficient rental process.
            </Text>
          </VStack>

          {/* Pages */}
          <VStack align="flex-start" spacing={4}>
            <Text fontWeight="bold" fontSize="lg">Pages</Text>
            <VStack align="flex-start" spacing={2}>
              <NavLink to="#">Home</NavLink>
              <NavLink to="#">About Us</NavLink>
              <NavLink to="#">Career</NavLink>
              <NavLink to="#">Contact Us</NavLink>
            </VStack>
          </VStack>

          {/* Product */}
          <VStack align="flex-start" spacing={4}>
            <Text fontWeight="bold" fontSize="lg">Product</Text>
            <VStack align="flex-start" spacing={2}>
              <NavLink to="#">Tivro AI</NavLink>
              <NavLink to="#">CityVJ</NavLink>
            </VStack>
          </VStack>

          {/* Legal */}
          <VStack align="flex-start" spacing={4}>
            <Text fontWeight="bold" fontSize="lg">Legal</Text>
            <VStack align="flex-start" spacing={2}>
              <NavLink to="#">Privacy</NavLink>
              <NavLink to="#">GDPR</NavLink>
              <NavLink to="#">Terms and Conditions</NavLink>
              <NavLink to="#">Cookies</NavLink>
            </VStack>
          </VStack>
        </SimpleGrid>

        {/* Social Icons */}
        <Box mt={8}>
          <Text fontWeight="bold" fontSize="lg" mb={4}>Socials</Text>
          <HStack spacing={4}>
            <NavLink to="#" aria-label="Facebook">
              <Icon as={FaFacebook} boxSize={6} />
            </NavLink>
            <NavLink to="#" aria-label="Twitter">
              <Icon as={FaTwitter} boxSize={6} />
            </NavLink>
            <NavLink to="#" aria-label="Instagram">
              <Icon as={FaInstagram} boxSize={6} />
            </NavLink>
            <NavLink to="#" aria-label="GitHub">
              <Icon as={FaGithub} boxSize={6} />
            </NavLink>
            <NavLink to="#" aria-label="LinkedIn">
              <Icon as={FaLinkedin} boxSize={6} />
            </NavLink>
          </HStack>
        </Box>

        {/* Copyright */}
        <Text fontSize="sm" mt={12}>
          © A product of Urello Technologies Limited - 1787613
        </Text>
      </Container>
    </Box>
  );
};

export default TivroFooter;