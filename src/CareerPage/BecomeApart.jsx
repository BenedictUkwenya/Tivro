import React from 'react';
import { Box, Container, Flex, Heading, Text, Button, Image, VStack, HStack, Circle } from '@chakra-ui/react';

const BecomeApart
 = () => {
  return (
    <Box width="100%">
      {/* Upper Section */}
      <Box bg="gray.50" py={12} px={4}>
        <Container maxW="container.xl">
          <Box textAlign="center" mb={8}>
            <Heading as="h1" size="xl" fontWeight="bold" mb={4}>
              Become Part of Something Bigger
            </Heading>
            <Text fontSize="md" color="gray.600">
              At Tivro, we're committed to building trust and transparency in the real estate sector across Africa.
            </Text>
          </Box>

          <Flex 
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            gap={8}
          >
            {/* Mission Section */}
            <Box flex="1">
              <VStack align="flex-start" spacing={6}>
                <HStack spacing={4} align="flex-start">
                  <Circle size="40px" bg="orange.500" color="white" fontWeight="bold">
                    <Text>1</Text>
                  </Circle>
                  <Box>
                    <Heading as="h3" size="md" mb={2}>
                      Our Mission
                    </Heading>
                    <Text color="gray.600">
                      To enable property owners with the tools they need to create safe, fair, profitable, prime real investments, and build trusting relationships with their tenants.
                    </Text>
                  </Box>
                </HStack>

                <HStack spacing={4} align="flex-start">
                  <Circle size="40px" bg="orange.500" color="white" fontWeight="bold">
                    <Text>2</Text>
                  </Circle>
                  <Box>
                    <Heading as="h3" size="md" mb={2}>
                      Our Vision
                    </Heading>
                    <Text color="gray.600">
                      To become the trust & global platform for smart operations, making life easier for both landlords and tenants, and building a first-rate industry.
                    </Text>
                  </Box>
                </HStack>
              </VStack>
            </Box>

            {/* Image Section */}
            <Box flex="1">
              <Image 
                src="/path-to-your-image.jpg" 
                alt="Professionals shaking hands" 
                borderRadius="md"
                boxShadow="md"
                width="100%"
                height="auto"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Lower Section / CTA */}
      <Box 
        bg="gray.800" 
        color="white" 
        py={10}
        px={4}
        backgroundImage="url('/path-to-background-image.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
      >
        {/* Dark overlay */}
        <Box 
          position="absolute" 
          top="0" 
          left="0" 
          right="0" 
          bottom="0" 
          bg="rgba(0,0,0,0.7)" 
        />

        <Container maxW="container.xl" position="relative" zIndex="1">
          <Flex direction="column" align="center" textAlign="center">
            <Heading as="h2" size="lg" mb={4}>
              Start Your Journey with Tivro Today!
            </Heading>
            <Text mb={6} maxW="container.md">
              Apply and complete the application form with your details and qualifications. Upload your documents (e.g., CV, certificates, etc.) and start your career journey with Tivro.
            </Text>
            <Button 
              bg="orange.500" 
              color="white" 
              _hover={{ bg: "orange.600" }} 
              size="md" 
              px={8}
              borderRadius="full"
            >
              Apply Now
            </Button>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default BecomeApart
;