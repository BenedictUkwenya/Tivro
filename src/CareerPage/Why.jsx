import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
  Center,
  Circle
} from '@chakra-ui/react';

const PartnerSection = () => {
  return (
    <Box bg="white" width="100%">
    <Container maxW="1200px" py={16} bg="white">
      <Flex 
        direction={{ base: 'column', md: 'row' }} 
        gap={{ base: 8, md: 12 }}
        align="center"
      >
        {/* Left Side - Image */}
        <Box 
          w={{ base: '100%', md: '45%' }} 
          h={{ base: 'auto', md: '500px' }}
          borderRadius="lg"
          overflow="hidden"
          bg="gray.100"
        >
          <Image
            src="/career1.jpeg"
            alt="Tivro Partners Team"
            objectFit="cover"
            w="100%"
            h="100%"
            borderRadius="lg"
            fallbackSrc="https://via.placeholder.com/500x500"
          />
        </Box>

        {/* Right Side - Content */}
        <Box w={{ base: '100%', md: '55%' }} pl={{ base: 0, md: 4 }}>
          {/* Feature Label */}
          <Text 
            color="#FF5722" 
            fontWeight="bold" 
            mb={2} 
            fontSize="sm"
          >
            FEATURES
          </Text>
          
          {/* Main Heading */}
          <Heading 
            as="h2" 
            size="xl" 
            mb={4} 
            fontWeight="bold"
          >
            Why Become a Tivro Partner
          </Heading>
          
          {/* Description */}
          <Text mb={8} color="gray.700">
            As a Tivro Partner, you'll be at the forefront of Africa's rental 
            revolution. Offer your clients a reliable, tech-driven solution that's 
            changing the industry.
          </Text>
          
          {/* Benefits Grid */}
          <Grid 
            templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }} 
            gap={6} 
            mb={8}
          >
            {/* Benefit 1 */}
            <GridItem>
              <Flex align="flex-start">
                <Circle size="40px" bg="#FF5722" color="white" mr={4} fontWeight="bold">
                  1
                </Circle>
                <Box>
                  <Text fontWeight="semibold" mb={2}>
                    Be part of a trusted platform
                  </Text>
                  <Text color="gray.700">
                    changing real estate in Africa.
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            
            {/* Benefit 2 */}
            <GridItem>
              <Flex align="flex-start">
                <Circle size="40px" bg="#FF5722" color="white" mr={4} fontWeight="bold">
                  2
                </Circle>
                <Box>
                  <Text fontWeight="semibold" mb={2}>
                    Earn income by assisting
                  </Text>
                  <Text color="gray.700">
                    tenants and landlords with verifications.
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            
            {/* Benefit 3 */}
            <GridItem>
              <Flex align="flex-start">
                <Circle size="40px" bg="#FF5722" color="white" mr={4} fontWeight="bold">
                  3
                </Circle>
                <Box>
                  <Text fontWeight="semibold" mb={2}>
                    Access to state-of-the-art
                  </Text>
                  <Text color="gray.700">
                    tools for seamless operations.
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            
            {/* Benefit 4 */}
            <GridItem>
              <Flex align="flex-start">
                <Circle size="40px" bg="#FF5722" color="white" mr={4} fontWeight="bold">
                  4
                </Circle>
                <Box>
                  <Text fontWeight="semibold" mb={2}>
                    Join a community of
                  </Text>
                  <Text color="gray.700">
                    professionals shaping Africa's rental ecosystem.
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
          
          {/* Call to Action Button */}
          <Button
            bg="#FF5722"
            color="white"
            _hover={{ bg: "#E64A19" }}
            size="md"
            px={6}
            borderRadius="md"
          >
            Join Tivro Now
          </Button>
        </Box>
      </Flex>
    </Container>
    </Box>
  );
};

export default PartnerSection;