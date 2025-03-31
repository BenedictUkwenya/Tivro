import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid,
  VStack,
  Circle,
  Badge,
  Center
} from '@chakra-ui/react';
import { 
  FiShield, 
  FiUsers, 
  FiStar, 
  FiHeart, 
  FiGrid 
} from 'react-icons/fi';
import { MdLightbulb } from 'react-icons/md';
const CoreValuesSection = () => {
  const accentColor = "#FF5722"; 
  
  const values = [
    {
      title: "Integrity",
      description: "We ensure landlords rent to credible tenants. We verify every details, offering peace of mind.",
      icon: FiShield
    },
    {
      title: "Innovation",
      description: "Tenants can request property inspections before renting. Our agents verify save time and reduce risks.",
      icon: MdLightbulb
    },
    {
      title: "Collaboration",
      description: "We complete tenant verification and property checks quickly, ensuring you make confident decisions.",
      icon: FiUsers
    },
    {
      title: "Excellence",
      description: "We prioritise speed and transparency in every step. All property checks and inspections are done quickly.",
      icon: FiStar
    },
    {
      title: "Customer-Centricity",
      description: "Tenants can request property inspections before renting. Our agents verify to save time and reduce risks.",
      icon: FiHeart
    },
    {
      title: "Teamwork",
      description: "Our platform helps reduce misunderstandings, making the rental process smoother.",
      icon: FiGrid
    }
  ];
  
  return (
    <Box bg="white" color="black" py={16}>
      <Container maxW="container.xl">
        {/* Header Section */}
        <VStack spacing={4} mb={16} textAlign="center">
          <Badge 
            bg="orange.50" 
            color={accentColor} 
            px={3} 
            py={1} 
            borderRadius="full"
            fontWeight="medium"
          >
            CONVICTION
          </Badge>
          
          <Heading 
            as="h2" 
            size="2xl" 
            fontWeight="bold"
            color="black"
          >
            Our Core Values
          </Heading>
          
          <Text 
            fontSize="lg" 
            color="gray.700" 
            maxW="container.md"
            textAlign="center"
            mx="auto"
            px={4}
          >
            Tivro bridges the gap between landlords and tenants with seamless verification and trusted
            property inspection, ensuring secure and efficient rental process.
          </Text>
        </VStack>
        
        {/* Values Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {values.map((value, index) => (
            <Box 
              key={index}
              p={8}
              borderRadius="xl"
              boxShadow="sm"
              border="1px solid"
              borderColor="gray.100"
              bg="white"
            >
              <VStack spacing={4} align="center" textAlign="center">
                <Circle size="60px" bg={accentColor} color="white">
                  <value.icon size="24px" />
                </Circle>
                
                <Heading as="h3" size="lg" fontWeight="bold">
                  {value.title}
                </Heading>
                
                <Text color="gray.700">
                  {value.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CoreValuesSection;