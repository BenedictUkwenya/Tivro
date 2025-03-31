import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Flex, 
  Image, 
  VStack,
  Badge
} from '@chakra-ui/react';

const OurJourneySection = () => {
  const accentColor = "#FF5722"; 
  return (
    <Box bg="white" color="black" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={10} align="center">
          {/* Header Section */}
          <VStack spacing={4} textAlign="center" maxW="container.md">
            <Badge 
              bg="orange.50" 
              color={accentColor} 
              px={4} 
              py={2} 
              borderRadius="full"
              fontWeight="medium"
            >
              WHAT WE DO
            </Badge>
            
            <Heading 
              as="h2" 
              size="2xl" 
              fontWeight="bold"
              color="black"
            >
              Our Journey
            </Heading>
            
            <Text 
              fontSize="xl" 
              color="gray.700" 
              lineHeight="tall"
              maxW="container.md"
              px={4}
            >
              Started with a vision to simplify the rental process across Africa, Tivro Africa has quickly become the 
              go-to platform for secure, fast, and transparent tenant and property verification.
            </Text>
          </VStack>
          
          {/* Image Section with Decorative Element */}
          <Box position="relative" w="full" maxW="container.lg">
            {/* Main Image */}
            <Box 
              borderRadius="2xl" 
              overflow="hidden" 
              boxShadow="lg"
            >
              <Image
                src="/path-to-team-image.jpg" // Replace with your actual image path
                alt="Tivro Africa Team Collaboration"
                w="full"
                h="auto"
              />
            </Box>
            
            
            <Box 
              position="absolute" 
              bottom="-30px" 
              left="-30px" 
              w="150px" 
              h="150px" 
              zIndex="-1"
            >
              {Array(5).fill('').map((_, i) => (
                <Box 
                  key={i}
                  position="absolute"
                  bottom={`${i * 10}px`}
                  left={`${i * 10}px`}
                  w={`${150 - i * 20}px`}
                  h={`${150 - i * 20}px`}
                  borderRadius="full"
                  border={`2px solid ${accentColor}`}
                  opacity={0.3 + (i * 0.1)}
                />
              ))}
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default OurJourneySection;