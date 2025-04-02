import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Flex, 
  Circle, 
  Stack,
  Image
} from '@chakra-ui/react';

const FeatureCard = ({ number, title, description }) => {
  return (
    <Box
      p={6}
      borderRadius="lg"
      bg="white"
      boxShadow="sm"
      border="1px solid"
      borderColor="gray.100"
      height="100%"
      color="black"
    >
      <Circle size="50px" bg="orange.500" color="white" mb={4}>
        <Text fontSize="xl" fontWeight="bold">{number}</Text>
      </Circle>
      <Text fontSize="lg" fontWeight="medium" mb={2}>
        {title}
      </Text>
      <Text color="gray.600">
        {description}
      </Text>
    </Box>
  );
};

const CareerAtTirvo = () => {
  return (
    <Container maxW="container.xl" py={12} bg="white" color="black">
      <Box mb={12}>
        <Box 
          bg="orange.50" 
          color="orange.500" 
          display="inline-block" 
          px={3} 
          py={1} 
          borderRadius="md" 
          fontSize="sm" 
          fontWeight="medium" 
          mb={3}
        >
          FEATURES
        </Box>
        <Heading as="h1" fontSize={{ base: "3xl", md: "4xl" }} mb={5}>
          Careers at Tivro Africa
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" maxW="3xl">
          At Tivro Africa, we're more than a company; we're a team of
          innovators dedicated to redefining how rentals work across Africa.
        </Text>
      </Box>

      <Flex 
        direction={{ base: "column", lg: "row" }} 
        gap={8} 
        align="stretch"
      >
        <Stack spacing={4} flex="1">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
            <FeatureCard 
              number="1" 
              title="Be part of a mission-driven team transforming rental experiences."
              description=""
            />
            <FeatureCard 
              number="2" 
              title="Work in a dynamic environment that values innovation and collaboration." 
              description=""
            />
          </SimpleGrid>
          <Box>
            <FeatureCard 
              number="3" 
              title="Grow your career with opportunities for learning and development." 
              description=""
            />
          </Box>
        </Stack>
        
        <Box 
          flex="1" 
          borderRadius="lg" 
          overflow="hidden"
        >
          <Image 
            src="/maincareer1.jpeg" 
            alt="Tivro Africa Team" 
            w="100%" 
            h="100%"
            objectFit="cover"
            fallbackSrc="https://via.placeholder.com/600x400?text=Team+Image"
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default CareerAtTirvo;