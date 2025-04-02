import React from 'react';
import { 
  Box, 
  Text, 
  Heading, 
  SimpleGrid, 
  Flex, 
  Circle, 
  Image, 
  Stack, 
  Button,
  useColorModeValue
} from '@chakra-ui/react';

const ApplicationStep = ({ number, title, description }) => {
  return (
    <Box 
      p={6} 
      borderRadius="lg" 
      bg="white" 
      boxShadow="sm"
      height="100%"
    >
      <Flex direction="column" align="flex-start">
        <Circle 
          size="40px" 
          bg="orange.500" 
          color="white" 
          fontWeight="bold" 
          mb={4}
        >
          {number}
        </Circle>
        <Text fontWeight="medium" fontSize="md">
          {title}
        </Text>
      </Flex>
    </Box>
  );
};

const ApplicationSection = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box py={12} bg="white">
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} bg="white" color="black">
        <Box mb={8}>
          <Button 
            size="sm" 
            bg="orange.100" 
            color="orange.500" 
            fontWeight="bold" 
            borderRadius="md" 
            px={4} 
            _hover={{ bg: 'orange.200' }}
          >
            APPLY NOW
          </Button>
          <Heading mt={2} fontSize={{ base: '3xl', md: '4xl' }} fontWeight="bold">
            Ready to Apply?
          </Heading>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={12}>
          <ApplicationStep 
            number="1" 
            title="Browse open roles and select your match." 
          />
          <ApplicationStep 
            number="2" 
            title="Submit your application with a CV and cover letter." 
          />
          <ApplicationStep 
            number="3" 
            title="Complete the online assessment (if applicable)." 
          />
          <ApplicationStep 
            number="4" 
            title="Attend interviews and meet the team!" 
          />
        </SimpleGrid>

        <Box 
          borderRadius="lg" 
          overflow="hidden"
          boxShadow="md"
        >
          <Image 
            src="/maincareer3.jpeg" 
            alt="Team meeting around a laptop"
            width="100%"
            height="410px"
            objectFit="cover"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ApplicationSection;