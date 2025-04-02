import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Image,
  Heading,
  Container,
  Link
} from '@chakra-ui/react';
import TermsAndConditions from './Texts';
import TivroFooter from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const NavLink = ({ children }) => (
  <Link 
    px={2} 
    py={1} 
    fontWeight="medium" 
    color="gray.800" 
    _hover={{ textDecoration: 'none' }}
  >
    {children}
  </Link>
);

const TermsHeader = () => {
  const navigate = useNavigate()
  return (
    <Box>
      {/* Navigation */}
      <Box bg="white" py={4} borderBottom="1px" borderColor="gray.200">
        <Container maxW="container.xl">
          <Flex align="center" justify="space-between">
            <HStack spacing={0} align="center">
              <Box color="orange.500" fontWeight="bold" fontSize="2xl">
              <NavLink to='/'><Image src="/logo_converted.png" alt="Tivro Logo" maxW="100px" /></NavLink>
              </Box>
            </HStack>
            
            <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
              <NavLink>Home</NavLink>
              <NavLink>About Tivro</NavLink>
              <NavLink>Tivro Partners</NavLink>
              <NavLink>Tivro AI</NavLink>
              <NavLink>Contact Us</NavLink>
            </HStack>
            
            <HStack spacing={4}>
              <Button variant="ghost" size="sm" fontWeight="medium" onClick={()=> navigate("/login")}>
                Login
              </Button>
              <Button 
                bg="orange.500" 
                color="white" 
                size="sm" 
                _hover={{ bg: 'orange.600' }}
                borderRadius="md"
                onClick={()=> navigate("/signup")}
              >
                Get Started
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Banner */}
      <Box 
        position="relative" 
        height="486px"
        bg="gray.900"
        backgroundImage="/terms.jpeg"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        {/* Dark overlay */}
        <Box 
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="blackAlpha.700"
        />
        
        {/* Content */}
        <Flex
          position="relative"
          align="center"
          justify="center"
          height="100%"
        >
          <Heading 
            color="white" 
            size="xl" 
            fontWeight="bold"
          >
            Terms and Conditions
          </Heading>
        </Flex>
      </Box>
      <TermsAndConditions />
      <TivroFooter />
    </Box>
  );
};

export default TermsHeader;