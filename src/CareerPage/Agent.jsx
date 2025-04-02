import React from 'react';
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  Circle
} from '@chakra-ui/react';

const AgentSection = () => {
  return (
    <Box bg="gray.50" py={16} width="100%">
      <Container maxW="1200px" px={4}>
        {/* Section Header */}
        <VStack spacing={2} mb={10} textAlign="center">
          <Text
            color="#FF5722"
            fontWeight="medium"
            fontSize="sm"
            letterSpacing="wide"
            textTransform="uppercase"
          >
            JOIN US
          </Text>
          <Heading
            as="h2"
            size="xl"
            fontWeight="bold"
            mb={3}
          >
            Become a Tivro Agent
          </Heading>
          <Text
            fontSize="md"
            maxW="800px"
            color="gray.600"
            textAlign="center"
            lineHeight="1.6"
          >
            Help landlords and tenants verify their rental transactions with ease by becoming a Tivro Agent. With our
            simple platform and trusted features, you'll help bring secure rental experiences to a wider audience.
          </Text>
        </VStack>

        {/* Feature Cards */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={16}>
          {/* Card 1 - Tenant Verification */}
          <Box
            bg="white"
            p={8}
            borderRadius="lg"
            boxShadow="md"
            textAlign="center"
            height="100%"
          >
            <Center mb={6}>
              <Circle size="60px" bg="#FF5722" color="white">
                <Box as="span" fontSize="2xl">🔎</Box>
              </Circle>
            </Center>
            <Heading as="h3" size="md" mb={4}>
              Tenant Verification
            </Heading>
            <Text color="gray.600">
              Ensure tenants are trustworthy by verifying their background, 
              employment, and creditworthiness.
            </Text>
          </Box>
          
          {/* Card 2 - Property Inspection */}
          <Box
            bg="white"
            p={8}
            borderRadius="lg"
            boxShadow="md"
            textAlign="center"
            height="100%"
          >
            <Center mb={6}>
              <Circle size="60px" bg="#FF5722" color="white">
                <Box as="span" fontSize="2xl">🏠</Box>
              </Circle>
            </Center>
            <Heading as="h3" size="md" mb={4}>
              Property Inspection
            </Heading>
            <Text color="gray.600">
              Visit and inspect properties on behalf of tenants to confirm their authenticity
              before making a commitment.
            </Text>
          </Box>
          
          {/* Card 3 - Home Search */}
          <Box
            bg="white"
            p={8}
            borderRadius="lg"
            boxShadow="md"
            textAlign="center"
            height="100%"
          >
            <Center mb={6}>
              <Circle size="60px" bg="#FF5722" color="white">
                <Box as="span" fontSize="2xl">🔍</Box>
              </Circle>
            </Center>
            <Heading as="h3" size="md" mb={4}>
              Home Search
            </Heading>
            <Text color="gray.600">
              Help tenants find secure, verified homes by checking listings and
              confirming property details.
            </Text>
          </Box>
        </SimpleGrid>
        
        {/* Bottom Image */}
        <Box
          borderRadius="xl"
          overflow="hidden"
          width="100%"
          height={{ base: "200px", md: "300px" }}
        >
          <Image
            src="/path-to-your-image.jpg"
            alt="Tivro Agents working together"
            width="100%"
            height="100%"
            objectFit="cover"
            fallbackSrc="https://via.placeholder.com/1200x400"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default AgentSection;