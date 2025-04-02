import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  Button,
  Flex,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';

const TivroAISignup = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, gray.200, gray.300)',
    'linear(to-r, gray.700, gray.800)'
  );
  
  const headingColor = useColorModeValue('white', 'white');
  const textColor = useColorModeValue('white', 'white');
  
  return (
    <Box
      position="relative"
      bgImage="url('/ai2.jpeg')" 
      backgroundSize="cover"
      backgroundPosition="center"
      height="432px"
      py={16}
      overflow="hidden"
    >
      {/* Dark overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.700"
        zIndex={0}
      />
      
      <Container maxW="container.lg" position="relative" zIndex={1}>
        <Stack spacing={6} align="center" textAlign="center">
          <Heading
            as="h1"
            size="2xl"
            color={headingColor}
            fontWeight="bold"
            lineHeight="1.2"
          >
            Join the Future of Housing with Tivro AI
          </Heading>
          
          <Text 
            fontSize="xl" 
            color={textColor} 
            maxW="container.md"
            px={4}
          >
            Sign up now to join the waitlist and be the first to experience how Tivro AI is transforming real estate. Simply search for your next apartment, ask questions about housing, or verify properties instantly!
          </Text>
          
          <Flex 
            direction={{ base: "column", md: "row" }} 
            w="full" 
            maxW="container.md"
            mt={4}
            gap={4}
          >
            <Input
              placeholder="e.g. example@gmail.com"
              size="lg"
              bg="white"
              color="gray.800"
              borderRadius="md"
              border="none"
              _placeholder={{ color: 'gray.500' }}
              flex={{ md: 3 }}
            />
            <Button
              size="lg"
              bg="orange.500"
              color="white"
              fontWeight="bold"
              borderRadius="md"
              px={8}
              _hover={{ bg: 'orange.600' }}
              flex={{ md: 1 }}
            >
              Join Waitlist
            </Button>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default TivroAISignup;