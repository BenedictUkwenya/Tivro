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
  Checkbox,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import logo from "../assets/logo_converted.png"
import bgimg from "../assets/image.png"
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <Flex minH="100vh" width="full" bg="white">
      {/* Left side - Form */}
      <Box 
        w={{ base: "full", md: "50%" }} 
        p={{ base: 4, md: 16 }}
        display="flex" 
        flexDirection="column" 
        justifyContent="center"
      >
        {/* Logo */}
        <Box mb={16} ml={2}>
        <Image src={logo} alt="Tivro Logo" maxW="100px" />
        </Box>
        
        {/* Heading */}
        <Box mb={8} ml={2}>
          <Heading size="lg" fontWeight="bold" mb={2} color="black">Welcome Back!</Heading>
          <Text color="black">
            Kindly enter your details to log back in
          </Text>
        </Box>
        
        {/* Login Form */}
        <Box>
          {/* Email */}
          <FormControl mb={4}>
            <FormLabel ml={2} color="black">Email</FormLabel>
            <Input 
             _placeholder={{ color: "black" }}
              color="black"
              placeholder="Enter email address" 
              size="lg" 
              borderRadius="md"
            />
          </FormControl>
          
          {/* Password */}
          <FormControl mb={6}>
            <FormLabel ml={2} color="black">Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                  _placeholder={{ color: "black" }}
              color="black"
                placeholder="********************"
                size="lg"
                borderRadius="md"
              />
              <InputRightElement width="3rem" h="full">
                <Button
                  variant="ghost"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          
          {/* Remember me and Forgot password */}
          <Flex justify="space-between" align="center" mb={6}>
            <Checkbox defaultChecked colorScheme="orange" color="black">Remember me</Checkbox>
            <Link color="black" href="/forgot-password">
              Forgot your password?
            </Link>
          </Flex>
          
          {/* Sign In Button */}
          <Button 
            w="full" 
            bg="orange.500" 
            color="white" 
            _hover={{ bg: 'orange.600' }}
            size="lg"
            borderRadius="md"
            mb={4}
          >
            Sign In
          </Button>
          
          {/* Don't have account */}
          <Text textAlign="center" color="black">
            Don't have an account? <Link color="black" href="/signup">Sign up</Link>
          </Text>
        </Box>
      </Box>
      
      {/* Right side - Image */}
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

export default LoginPage;