import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Flex, 
  Button,
  Icon
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const JobCard = ({ title, description, onViewJob }) => {
  return (
    <Box
      p={8}
      borderRadius="lg"
      bg="white"
      boxShadow="sm"
      border="1px solid"
      borderColor="gray.100"
      height="100%"
    >
      <Flex justifyContent="space-between" alignItems="flex-start" mb={4}>
        <Heading as="h3" fontSize="xl" fontWeight="bold">
          {title}
        </Heading>
        <Button 
          rightIcon={<ArrowForwardIcon />} 
          color="orange.500" 
          variant="link" 
          onClick={onViewJob}
        >
          View Job
        </Button>
      </Flex>
      <Text color="gray.600">
        {description}
      </Text>
    </Box>
  );
};

const OpenRolesSection = () => {
  const handleViewJob = (jobTitle) => {
    console.log(`Viewing job: ${jobTitle}`);
    // Implement navigation or modal opening logic here
  };

  return (
    <Box bg="gray.50" py={16}>
      <Container maxW="container.xl">
        <Box textAlign="center" mb={12}>
          <Text 
            color="orange.500" 
            fontWeight="medium" 
            mb={2}
          >
            WE ARE HIRING
          </Text>
          <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }} mb={4}>
            Open Roles
          </Heading>
          <Text 
            fontSize={{ base: "md", md: "lg" }} 
            color="gray.700" 
            maxW="3xl" 
            mx="auto"
          >
            Join our mission to reshape housing. Explore roles that match your skills 
            and make an impact with Tivro!
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <JobCard 
            title="Technology & Development"
            description="Build cutting-edge solutions to improve rental verification processes."
            onViewJob={() => handleViewJob("Technology & Development")}
          />
          <JobCard 
            title="Customer Experience"
            description="Help landlords and tenants navigate our platform with ease."
            onViewJob={() => handleViewJob("Customer Experience")}
          />
          <JobCard 
            title="Sales & Partnerships"
            description="Drive growth by connecting with partners across Africa."
            onViewJob={() => handleViewJob("Sales & Partnerships")}
          />
          <JobCard 
            title="Technology & Development"
            description="Build cutting-edge solutions to improve rental verification processes."
            onViewJob={() => handleViewJob("Technology & Development")}
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default OpenRolesSection;