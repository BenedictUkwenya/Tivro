import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Button, 
  Flex, 
  Image, 
  Grid, 
  GridItem,
  VStack, 
  HStack,
  useColorModeValue
} from '@chakra-ui/react';

const AboutUsSection = () => {
  const accentColor = useColorModeValue('#FF5722', '#FF7043');
  
  return (
    <Box bg="white">
      <Container maxW="container.xl" py={16}>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={{ base: 8, md: 12 }}
          alignItems="center"
        >
          {/* Left Side - Image and Dot Pattern */}
          <GridItem position="relative">
            <Box position="absolute" top="-10%" left="-10%" zIndex={1}>
              <Grid templateColumns="repeat(6, 1fr)" gap={2}>
                {Array(36).fill('').map((_, i) => (
                  <Box 
                    key={i} 
                    w={2} 
                    h={2} 
                    borderRadius="full" 
                    bg={i % 3 === 0 ? accentColor : 'transparent'} 
                  />
                ))}
              </Grid>
            </Box>
            
            <Box
              borderRadius="xl"
              overflow="hidden"
              boxShadow="xl"
              position="relative"
              zIndex={2}
            >
              <Image
                src="/" 
                alt="Person using Tivro Africa services"
                w="full"
                h="auto"
                objectFit="cover"
              />
            </Box>
          </GridItem>

          {/* Right Side - Content */}
          <GridItem>
            <VStack spacing={6} align="flex-start">
              <Text 
                color={accentColor} 
                fontWeight="bold" 
                textTransform="uppercase"
              >
                WHAT WE DO
              </Text>
              
              <Heading 
                as="h1" 
                size="2xl" 
                fontWeight="bold"
                lineHeight="1.2"
              >
                Innovating Rental Experiences Across Africa
              </Heading>
              
              <Text fontSize="lg" color="gray.600">
                Tivro Africa was built with one mission: to make the rental process 
                faster, more secure, and more transparent for everyone in Africa. We 
                provide tech-powered solutions for verifying tenants and properties, 
                reducing risks, and ensuring smooth transactions.
              </Text>
              
              <Text fontSize="lg" color="gray.600" mt={4}>
                Whether you're renting a property or looking for a place to live, 
                Tivro's verification platform is built for you.
              </Text>
              
              <Button 
                size="lg" 
                bg={accentColor}
                color="white"
                _hover={{ bg: 'orange.600' }}
                borderRadius="md"
                mt={4}
              >
                Get Started
              </Button>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsSection;