import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Flex, 
  Image, 
  VStack,
  HStack,
  Grid,
  GridItem,
  Circle,
  Badge
} from '@chakra-ui/react';
import { FiTarget, FiEye } from 'react-icons/fi';

const OurGoalSection = () => {
  const accentColor = "#FF5722"; 
  
  return (
    <Box bg="white" color="black" py={16}>
      <Container maxW="container.xl">
        {/* Header Section */}
        <VStack align="flex-start" spacing={3} mb={12} position="relative">
          <Badge 
            bg="orange.50" 
            color={accentColor} 
            px={3} 
            py={1} 
            borderRadius="full"
            fontWeight="medium"
          >
            FEATURES
          </Badge>
          
          <Heading 
            as="h2" 
            size="2xl" 
            fontWeight="bold"
            color="black"
          >
            Our Goal Is Simple
          </Heading>
          
          <Text 
            fontSize="xl" 
            color="gray.700" 
            lineHeight="tall"
            maxW="container.md"
          >
            Landlords verify tenants. Tenants find homes.<br />
            Tivro ensures trust with ease.
          </Text>
          
          {/* Dot Pattern - Top Right */}
          <Box 
            position="absolute" 
            top="0" 
            right="-20px" 
            zIndex={1}
            display={{ base: 'none', md: 'block' }}
          >
            <Grid templateColumns="repeat(7, 1fr)" gap={2}>
              {Array(35).fill('').map((_, i) => (
                <Box 
                  key={i} 
                  w={2} 
                  h={2} 
                  borderRadius="full" 
                  bg={accentColor} 
                  opacity={0.7}
                />
              ))}
            </Grid>
          </Box>
        </VStack>
        
        {/* Main Content Grid */}
        <Grid 
          templateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          gap={8}
          alignItems="center"
        >
          {/* Left Side - Mission & Vision */}
          <GridItem>
            <VStack spacing={6} align="stretch">
              {/* Mission Card */}
              <Box 
                bg="white" 
                p={6} 
                borderRadius="xl" 
                boxShadow="md" 
                border="1px solid" 
                borderColor="gray.100"
              >
                <HStack spacing={4} align="flex-start" mb={3}>
                  <Circle size="50px" bg={accentColor} color="white">
                    <FiTarget size="24px" />
                  </Circle>
                  <Heading as="h3" size="lg" fontWeight="bold">
                    Our Mission
                  </Heading>
                </HStack>
                <Text color="gray.700" fontSize="md">
                  To provide property owners with the tools they need to make informed decisions, 
                  protect their investments, and build trusting relationships with their tenants.
                </Text>
              </Box>
              
              {/* Vision Card */}
              <Box 
                bg="white" 
                p={6} 
                borderRadius="xl" 
                boxShadow="md" 
                border="1px solid" 
                borderColor="gray.100"
              >
                <HStack spacing={4} align="flex-start" mb={3}>
                  <Circle size="50px" bg={accentColor} color="white">
                    <FiEye size="24px" />
                  </Circle>
                  <Heading as="h3" size="lg" fontWeight="bold">
                    Our Vision
                  </Heading>
                </HStack>
                <Text color="gray.700" fontSize="md">
                  To become the leading global platform for tenant verification, 
                  setting the standard for trust, transparency, and security in the real estate industry.
                </Text>
              </Box>
            </VStack>
          </GridItem>
          
          {/* Right Side - Image */}
          <GridItem>
            <Box 
              borderRadius="2xl" 
              overflow="hidden" 
              boxShadow="lg"
            >
              <Image
                src="/path-to-handshake-image.jpg" // Replace with your actual image path
                alt="Landlord and tenant handshake"
                w="full"
                h="auto"
                objectFit="cover"
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurGoalSection;