import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  useColorModeValue
} from '@chakra-ui/react';
import { FaFlask, FaComments, FaLightbulb, FaGlobeAfrica } from 'react-icons/fa';

const TivroAIFeatures = () => {
  return (
    <Box py={16} bg="white">
      <Container maxW="container.xl">
        {/* Header Section */}
        <Box textAlign="center" mb={12}>
          <Text
            color="orange.500"
            fontWeight="bold"
            fontSize="sm"
            letterSpacing="wide"
            textTransform="uppercase"
            mb={2}
          >
            FEATURES
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            mb={4}
          >
            What Tivro AI Can Do
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            maxW="800px"
            mx="auto"
            color="gray.600"
            lineHeight="tall"
          >
            Tivro AI is your go-to solution for housing and rental-related needs, bringing
            unparalleled ease, accuracy, and innovation to property searches and verifications.
          </Text>
        </Box>

        {/* Features Grid */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mt={10}>
          {/* Smart Property Search */}
          <Box
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            p={8}
            height="100%"
          >
            <Flex mb={4}>
              <Flex
                w="60px"
                h="60px"
                bg="orange.500"
                borderRadius="full"
                justify="center"
                align="center"
              >
                <Icon as={FaFlask} color="white" boxSize={6} />
              </Flex>
            </Flex>
            <Heading as="h3" size="lg" mb={3} fontWeight="semibold">
              Smart Property Search
            </Heading>
            <Text fontSize="md" color="gray.600">
              Effortlessly find tailored housing options in Lagos
              or beyond, powered by intelligent AI-driven
              recommendations.
            </Text>
          </Box>

          {/* Legal Assistance */}
          <Box
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            p={8}
            height="100%"
          >
            <Flex mb={4}>
              <Flex
                w="60px"
                h="60px"
                bg="orange.500"
                borderRadius="full"
                justify="center"
                align="center"
              >
                <Icon as={FaComments} color="white" boxSize={6} />
              </Flex>
            </Flex>
            <Heading as="h3" size="lg" mb={3} fontWeight="semibold">
              Legal Assistance
            </Heading>
            <Text fontSize="md" color="gray.600">
              Simplify legal and rental-related questions with
              instant AI-guided answers you can trust.
            </Text>
          </Box>

          {/* Housing Tips */}
          <Box
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            p={8}
            height="100%"
          >
            <Flex mb={4}>
              <Flex
                w="60px"
                h="60px"
                bg="orange.500"
                borderRadius="full"
                justify="center"
                align="center"
              >
                <Icon as={FaLightbulb} color="white" boxSize={6} />
              </Flex>
            </Flex>
            <Heading as="h3" size="lg" mb={3} fontWeight="semibold">
              Housing Tips
            </Heading>
            <Text fontSize="md" color="gray.600">
              Receive actionable insights and recommendations
              to make smarter, more informed rental decisions.
            </Text>
          </Box>

          {/* Global Expansion Vision */}
          <Box
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            p={8}
            height="100%"
          >
            <Flex mb={4}>
              <Flex
                w="60px"
                h="60px"
                bg="orange.500"
                borderRadius="full"
                justify="center"
                align="center"
              >
                <Icon as={FaGlobeAfrica} color="white" boxSize={6} />
              </Flex>
            </Flex>
            <Heading as="h3" size="lg" mb={3} fontWeight="semibold">
              Global Expansion Vision
            </Heading>
            <Text fontSize="md" color="gray.600">
              Shaping the future of real estate by redefining
              property and rental experiences beyond Africa.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default TivroAIFeatures;