import React, { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
  Link,
  Spacer,
  useBreakpointValue
} from '@chakra-ui/react';
import FAQAccordion from './FAQAccordings';
import TivroFooter from '../components/Footer';
import { NavLink, useNavigate } from "react-router-dom";
const FAQPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const navigate = useNavigate();
  return (
    <Box width="100%">
      {/* Navigation Bar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        paddingX="2rem"
        bg="white"
        color="black"
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Flex align="center">
          <NavLink to='/'><Image src="/logo_converted.png" alt="Tivro Logo" maxW="100px" /></NavLink>
        </Flex>
        
        <HStack 
          spacing={8} 
          display={{ base: 'none', md: 'flex' }}
          flex="1"
          justify="center"
          ml="4rem"
        >
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About Tivro</NavLink>
          <NavLink to="/partners">Tivro Partners</NavLink>
          <NavLink to="/ai">Tivro AI</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </HStack>
        
        <HStack spacing={4}>
          <Button variant="ghost" size="sm" onClick={()=>navigate("/login")}>Login</Button>
          <Button 
            bg="#FF4500" 
            color="white" 
            size="sm" 
            _hover={{ bg: "#E03E00" }}
            borderRadius="md"
            onClick={()=>navigate("/signup")}
          >
            Get Started
          </Button>
        </HStack>
      </Flex>

      {/* Hero Section with Background Image */}
      <Box
        position="relative"
        height="485px"
        bgImage="url('/faq.jpeg')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        {/* Dark overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0,0,0,0.6)"
        />
        
        {/* FAQ Content */}
        <Container maxW="container.lg" position="relative" height="100%">
          <Flex
            direction="column"
            height="100%"
            justify="center"
            align="center"
            textAlign="center"
            color="white"
            px={4}
          >
            <Heading size="xl" mb={4}>Frequently Asked Questions</Heading>
            <Text fontSize="md" maxW="800px">
              Check our FAQ below if you have any unanswered questions and if you can't
              find the answer, reach out to us at <NavLink to="mailto:info@tivro.mail.com" color="#FF4500" fontWeight="bold">info@tivro.mail.com</NavLink>.
            </Text>
            
            <Flex mt={10}>
              <Text mr={4}>See answers for</Text>
              <HStack spacing={3}>
                <Button 
                  size="sm" 
                  variant="outline" 
                  color="white" 
                  borderColor="white"
                  borderRadius="full"
                  _hover={{ bg: "rgba(255,255,255,0.1)" }}
                  onClick={() => setActiveTab('general')}
                  bg={activeTab === 'general' ? "rgba(255,255,255,0.1)" : "transparent"}
                >
                  General Questions
                </Button>
                
                <Button 
                  size="sm" 
                  variant="outline" 
                  color="white" 
                  borderColor="white"
                  borderRadius="full"
                  _hover={{ bg: "rgba(255,255,255,0.1)" }}
                  onClick={() => setActiveTab('property')}
                  bg={activeTab === 'property' ? "rgba(255,255,255,0.1)" : "transparent"}
                >
                  Property Owner & Managers
                </Button>
                
                <Button 
                  size="sm" 
                  variant="outline" 
                  color="white" 
                  borderColor="white"
                  borderRadius="full"
                  _hover={{ bg: "rgba(255,255,255,0.1)" }}
                  onClick={() => setActiveTab('tenants')}
                  bg={activeTab === 'tenants' ? "rgba(255,255,255,0.1)" : "transparent"}
                >
                  Tenants & Renters
                </Button>
                
                <Button 
                  size="sm" 
                  variant="outline" 
                  color="white" 
                  borderColor="white"
                  borderRadius="full"
                  _hover={{ bg: "rgba(255,255,255,0.1)" }}
                  onClick={() => setActiveTab('security')}
                  bg={activeTab === 'security' ? "rgba(255,255,255,0.1)" : "transparent"}
                >
                  Security & Trust
                </Button>
              </HStack>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <FAQAccordion />
      <TivroFooter />
    </Box>
  );
};

export default FAQPage;