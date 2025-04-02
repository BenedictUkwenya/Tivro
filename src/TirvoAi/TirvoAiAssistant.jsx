import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Button,
  VStack,
  HStack,
  Image,
  Grid,
  GridItem,
  Badge
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const TivroAIAssistant = () => {
  return (
    <Box 
      bg="white" 
      minH="100vh" 
      display="flex" 
      justifyContent="flex-end"
    >
      <Flex 
        w={{ base: "100%", lg: "auto" }} 
        justifyContent="flex-end"
      >
        <Grid 
          templateColumns={{ base: "1fr", lg: "528px 1fr" }} 
          gap={0}
          w={{ base: "100%", lg: "auto" }}
        >
          {/* Left Column - Features and Prompts */}
          <GridItem 
            p={{ base: 6, md: 8 }} 
            bg="white" 
            border="1px solid" 
            borderColor="blue.200" 
            h="554px"
            overflow="hidden"
          >
            <VStack spacing={5} align="flex-start" h="full">
              <Badge 
                bg="orange.100" 
                color="orange.500" 
                px={3} 
                py={1} 
                borderRadius="full" 
                fontWeight="medium"
                fontSize="xs"
              >
                FEATURES
              </Badge>
              
              <Heading as="h1" size="xl" fontWeight="bold" color="black">
                How Tivro AI Can Assist You
              </Heading>
              
              <Text fontSize="md" color="gray.700" lineHeight="tall">
                Ask anything, and Tivro AI will deliver the answers you need—quick,
                reliable, and tailored to your housing and legal queries. Try these
                prompts to get started
              </Text>
              
              <VStack spacing={4} w="full" pt={2}>
                {/* Sample Prompts */}
                <Box 
                  border="1px" 
                  borderColor="orange.300" 
                  bg="orange.50" 
                  p={3} 
                  borderRadius="md" 
                  w="full"
                >
                  <Text color="orange.500" fontSize="sm">
                    Kindly help me find a 2-bedroom apartment in Lagos under ₦500k/year?
                  </Text>
                </Box>
                
                <Box 
                  border="1px" 
                  borderColor="gray.200" 
                  p={3} 
                  borderRadius="md" 
                  w="full"
                >
                  <Text color="gray.700" fontSize="sm">
                    What documents do I need to rent a house in Nigeria?
                  </Text>
                </Box>
                
                <Box 
                  border="1px" 
                  borderColor="gray.200" 
                  p={3} 
                  borderRadius="md" 
                  w="full"
                >
                  <Text color="gray.700" fontSize="sm">
                    Are there housing laws I should know about in Lagos?
                  </Text>
                </Box>
              </VStack>
              
              <Flex w="full" gap={4} mt="auto">
                <Button 
                  leftIcon={<SearchIcon />}
                  bg="orange.500"
                  color="white"
                  _hover={{ bg: "orange.600" }}
                  size="md"
                  borderRadius="md"
                  px={6}
                  flex="1"
                  cursor="pointer"
                >
                  Ask Tivro AI
                </Button>
                
                <Button 
                  variant="outline" 
                  borderColor="gray.300"
                  color="gray.700"
                  size="md"
                  borderRadius="md"
                  px={6}
                  flex="1"
                >
                  Contact Us
                </Button>
              </Flex>
            </VStack>
          </GridItem>
          
          {/* Right Column - Chat Interface Preview */}
          <GridItem 
            position="relative" 
            bg="gray.900"
            display={{ base: "none", lg: "block" }}
            height="966px"
            width="100%"
          >
            {/* Background Image */}
            <Box 
              position="absolute" 
              top={0} 
              left={0} 
              right={0} 
              bottom={0} 
              bgImage="url('ai1.jpeg')" 
              bgSize="cover"
              bgPosition="center"
              opacity={0.6}
            />
            
            {/* Chat Interface */}
            <Flex 
              position="relative" 
              h="full" 
              justify="center" 
              align="center" 
              p={6}
            >
              <Box 
                bg="white" 
                borderRadius="xl" 
                overflow="hidden" 
                w="full" 
                maxW="400px" 
                boxShadow="xl"
              >
                {/* Chat Header */}
                <Flex bg="orange.500" p={3} align="center">
                  <Image 
                    src="/tivro-logo.png" 
                    boxSize="30px" 
                    borderRadius="full" 
                    mr={2} 
                    fallbackSrc="https://via.placeholder.com/30"
                  />
                  <Text color="white" fontWeight="medium" fontSize="sm">Tivro AI</Text>
                </Flex>
                
                {/* Chat Messages */}
                <Box p={3} bg="gray.50" minH="350px">
                  {/* User Message */}
                  <Box 
                    bg="orange.100" 
                    color="gray.800" 
                    p={2} 
                    borderRadius="lg" 
                    borderTopRightRadius="sm"
                    maxW="80%" 
                    ml="auto" 
                    mb={3}
                  >
                    <Text fontSize="xs">
                      Kindly help me find a 2-bedroom apartment in Lagos under ₦500k/year?
                    </Text>
                  </Box>
                  
                  {/* Bot First Message */}
                  <Box 
                    bg="white" 
                    color="gray.800" 
                    p={2} 
                    borderRadius="lg" 
                    borderTopLeftRadius="sm"
                    maxW="80%" 
                    mr="auto" 
                    mb={3} 
                    boxShadow="sm"
                  >
                    <Text fontSize="xs">Hi there!</Text>
                  </Box>
                  
                  {/* Bot Second Message */}
                  <Box 
                    bg="white" 
                    color="gray.800" 
                    p={2} 
                    borderRadius="lg" 
                    borderTopLeftRadius="sm"
                    maxW="80%" 
                    mr="auto" 
                    mb={3} 
                    boxShadow="sm"
                  >
                    <Text fontSize="xs">
                      Thanks for reaching out. Let's help you find a 2-bedroom apartment in Lagos within your budget of ₦500k/year.
                    </Text>
                  </Box>
                  
                  {/* Dots */}
                  <Flex justify="center" my={2}>
                    <HStack spacing={1}>
                      <Box w="4px" h="4px" borderRadius="full" bg="gray.400" />
                      <Box w="4px" h="4px" borderRadius="full" bg="gray.400" />
                      <Box w="4px" h="4px" borderRadius="full" bg="gray.400" />
                      <Box w="4px" h="4px" borderRadius="full" bg="gray.400" />
                    </HStack>
                  </Flex>
                  
                  {/* Bot Third Message */}
                  <Box 
                    bg="white" 
                    color="gray.800" 
                    p={2} 
                    borderRadius="lg" 
                    borderTopLeftRadius="sm"
                    maxW="80%" 
                    mr="auto" 
                    mb={3} 
                    boxShadow="sm"
                  >
                    <Text fontSize="xs">
                      Found a 2-bedroom flat in Ikeja, Lagos - ₦450k/year. Would you like more details on this property or help with another location? 😊
                    </Text>
                  </Box>
                  
                  {/* User Response */}
                  <Box 
                    bg="orange.100" 
                    color="gray.800" 
                    p={2} 
                    borderRadius="lg" 
                    borderTopRightRadius="sm"
                    maxW="80%" 
                    ml="auto"
                  >
                    <Text fontSize="xs">Yes! Please</Text>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
};

export default TivroAIAssistant;