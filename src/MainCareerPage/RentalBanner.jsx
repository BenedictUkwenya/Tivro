import React from 'react';
import { 
  Box, 
  Text, 
  Heading, 
  Container, 
  Button, 
  Stack, 
  Flex,
  useColorModeValue
} from '@chakra-ui/react';

const RentalEcosystemBanner = () => {
  return (
    <Box 
      position="relative"
      height={{ base: "md", md: "lg" }}
      width="100%"
      overflow="hidden"
    >
      {/* Background Image with Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="432px"
        bgImage="/maincareer4.jpeg"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bg: 'gray.800',
          opacity: 0.7,
        }}
      />

      {/* Content */}
      <Container 
        maxW="container.lg" 
        height="100%" 
        position="relative" 
        zIndex="1"
      >
        <Flex 
          direction="column" 
          alignItems="center" 
          justifyContent="center"
          textAlign="center" 
          height="100%"
          color="white"
          px={{ base: 4, md: 8 }}
        >
          <Heading 
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            mb={4}
            lineHeight="shorter"
          >
            Let's create a safer, more trusted<br />
            rental ecosystem together
          </Heading>
          
          <Text 
            fontSize={{ base: "md", md: "lg" }}
            maxW="3xl"
            mb={8}
          >
            We're always looking for talented individuals. Send your CV and a cover letter to 
            careers@tivroafrica.com or browse our open roles to apply directly.
          </Text>
          
          <Stack 
            direction={{ base: "column", sm: "row" }}
            spacing={{ base: 4, sm: 6 }}
            width={{ base: "100%", sm: "auto" }}
          >
            <Button 
              size="lg"
              bg="white"
              color="gray.800"
              _hover={{ bg: "gray.200" }}
              px={8}
              fontWeight="medium"
              borderRadius="md"
            >
              Explore Careers
            </Button>
            <Button 
              size="lg"
              bg="orange.500"
              color="white"
              _hover={{ bg: "orange.600" }}
              px={8}
              fontWeight="medium"
              borderRadius="md"
            >
              Apply Now
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default RentalEcosystemBanner;