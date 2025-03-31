import React, { useState } from 'react';
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Heading,
  Text,
  Link,
  Image,
  VStack,
  Checkbox,
  useColorModeValue,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { color } from 'framer-motion';
import logo from "../assets/logo_converted.png"
import bgimg from "../assets/image.png"
const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  return (
    <Flex minH="100vh" width="full" bg="white">
      {/* Left side - Form */}
      <Box 
        w={{ base: "full", md: "50%" }} 
        p={8} 
        display="flex" 
        flexDirection="column" 
        justifyContent="center"
      >
        {/* Logo */}
        <Box mb={8}>
          <Image src={logo} alt="Tivro Logo" maxW="100px" />
        </Box>
        
        {/* Heading */}
        <Heading size="lg" mb={1} color="black">Get Started With Tivro!</Heading>
        <Text mb={8} color="black">
          Please enter your details to sign up
        </Text>
        
        {/* Signup Form */}
        <VStack spacing={4} align="stretch">
          {/* First Name */}
          <FormControl isRequired>
            <FormLabel color="black">First Name</FormLabel>
            <Input 
            _placeholder={{ color: "black" }}
            color="black"
              placeholder="Enter your first name" 
              border="1px solid black" 
              placeholderTextColor="black"
            />
          </FormControl>
          
          {/* Last Name */}
          <FormControl isRequired>
            <FormLabel color="black">Last Name</FormLabel>
            <Input 
            _placeholder={{ color: "black" }}
            color="black"
              placeholder="Enter your last name" 
              border="1px solid black" 
            />
          </FormControl>
          
          {/* Email */}
          <FormControl isRequired>
            <FormLabel color="black">Email</FormLabel>
            <Input 
              type="email" 
              _placeholder={{ color: "black" }}
              color="black"
              placeholder="Enter your email address" 
              border="1px solid black" 
              
            />
          </FormControl>
          
          {/* Password */}
          <FormControl isRequired>
            <FormLabel color="black">Password</FormLabel>
            <InputGroup>
              <Input
              _placeholder={{ color: "black" }}
              color="black"
                type={showPassword ? 'text' : 'password' }
                placeholder="Create a password"
                border="1px solid black"
                placeholderTextColor="black"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                  bg="transparent"
                  color="black"
                >
                  {showPassword ? <ViewOffIcon color="black" /> : <ViewIcon color="black" />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          
          {/* Confirm Password */}
          <FormControl isRequired>
            <FormLabel color="black">Confirm Password</FormLabel>
            <InputGroup>
              <Input
               _placeholder={{ color: "black" }}
               color="black"
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                border="1px solid black"
                placeholderTextColor="black"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  bg="transparent"
                  color="black"
                >
                  {showConfirmPassword ? <ViewOffIcon color="black" /> : <ViewIcon color="black" />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          
          {/* Terms and Conditions */}
          <Checkbox defaultChecked color="black">
            I agree to the <Link color="orange.500">Terms of Service</Link> and <Link color="orange.500">Privacy Policy</Link>
          </Checkbox>
          
          {/* Signup Button */}
          <Button 
            mt={6} 
            w="full" 
            bg="orange.500" 
            color="white" 
            _hover={{ bg: 'orange.600' }}
            size="lg"
          >
            Sign Up
          </Button>
          
          {/* Already have account */}
          <Text mt={4} textAlign="center" color="black">
            Already have an account? <Link color="orange.500" href="/login">Sign in</Link>
          </Text>
        </VStack>
      </Box>
      
      <Box 
        w={{ base: "0%", md: "50%" }} 
        display={{ base: "none", md: "block" }}
        bgImage={`url(${bgimg})`}
        bgSize="cover"
        bgPosition="center"
      />
    </Flex>
  );
};

export default SignupPage;