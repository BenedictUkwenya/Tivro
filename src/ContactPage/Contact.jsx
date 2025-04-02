import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  Flex,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Image,
  Link
} from '@chakra-ui/react';
import FaqSection from '../components/FAQSection';
import TivroFooter from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
const ContactUsPage = () => {
  const navigate = useNavigate()
  return (
    <Box width="100%">
      {/* Navigation Bar */}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        bg="white"
        color="black"
        borderBottom="1px"
        borderColor="gray.200"
      >
        <Box>
         <NavLink to='/'><Image src="/logo_converted.png" alt="Tivro Logo" maxW="100px" /></NavLink>
        </Box>
        
        <HStack spacing={6} display={{ base: 'none', md: 'flex' }}>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About Tivro</NavLink>
          <NavLink to='#'>Tivro Partners</NavLink>
          <NavLink to='/ai'>Tivro AI</NavLink>
          <NavLink fontWeight="bold" to='/contact'>Contact Us</NavLink>
        </HStack>
        
        <HStack spacing={4}>
          <Button variant="ghost" size="sm" color="black" onClick={navigate("/login")}>Login</Button>
          <Button 
            bg="#FF4500" 
            color="white" 
            size="sm" 
            _hover={{ bg: "#E03E00" }}
            borderRadius="md"
            onClick={()=> naviagate("/signup")}
          >
            Get Started
          </Button>
        </HStack>
      </Flex>

   
        <Box
          position="relative"
          height="400px"
          bgImage="url('/ctpage.jpeg')"
          bgPosition="top"
          bgSize="cover"
          bgRepeat="no-repeat"
          padding="300px"
          _after={{ content: '""',
            position: "absolute",
            pointerEvents: "none",}}
          
        >
          {/* Dark overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0,0,0,0.5)"
        />
        
        {/* Contact Us Title */}
        <Flex
          position="relative"
          height="100%"
          align="center"
          justify="center"
        >
          <Heading color="white" size="xl">Contact Us</Heading>
        </Flex>
      </Box>

      {/* Contact Form Section */}
      <Box width="100%" bg="white">
      <Container maxW="container.md" py={10} bg="white" color="black">
        <VStack spacing={8} align="center">
          <Text color="#FF4500" fontWeight="bold">REACH OUT</Text>
          
          <Heading textAlign="center" size="lg">Let's stay connected</Heading>
          
          <Text textAlign="center" maxW="container.sm">
            Have a question or need support? We are just a message away, fill out the form below and one of our team members will get back to you as soon as possible.
          </Text>
          
          <Box width="100%" pt={4}>
            <form>
              <VStack spacing={6}>
                <Flex 
                  width="100%" 
                  direction={{ base: "column", md: "row" }}
                  gap={6}
                >
                  <FormControl isRequired>
                    <FormLabel>First name</FormLabel>
                    <Input
                      placeholder=""
                      size="md"
                      borderColor="gray.300"
                      _focus={{ borderColor: "#FF4500" }}
                    />
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel>Last name</FormLabel>
                    <Input
                      placeholder=""
                      size="md"
                      borderColor="gray.300"
                      _focus={{ borderColor: "#FF4500" }}
                    />
                  </FormControl>
                </Flex>
                
                <Flex 
                  width="100%" 
                  direction={{ base: "column", md: "row" }}
                  gap={6}
                >
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      placeholder=""
                      size="md"
                      borderColor="gray.300"
                      _focus={{ borderColor: "#FF4500" }}
                    />
                  </FormControl>
                  
                  <FormControl>
                    <FormLabel>Phone number</FormLabel>
                    <Input
                      type="tel"
                      placeholder=""
                      size="md"
                      borderColor="gray.300"
                      _focus={{ borderColor: "#FF4500" }}
                    />
                  </FormControl>
                </Flex>
                
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    placeholder="Type your message..."
                    size="md"
                    borderColor="gray.300"
                    _focus={{ borderColor: "#FF4500" }}
                    height="150px"
                  />
                </FormControl>
                
                <Flex justify="center" pt={4}>
                  <Button
                    type="submit"
                    bg="#FF4500"
                    color="white"
                    px={6}
                    _hover={{ bg: "#E03E00" }}
                  >
                    Send Message
                  </Button>
                </Flex>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Container>
      </Box>
      <FaqSection />
      <TivroFooter />
    </Box>
  );
};

export default ContactUsPage;