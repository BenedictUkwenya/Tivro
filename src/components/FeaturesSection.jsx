import React, { useEffect, useState } from 'react';
import {
  Box,
  Center,
  Container,
  Grid,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  CheckCircleIcon, 
  TimeIcon, 
  StarIcon, 
  SpinnerIcon, 
  ViewIcon, 
  ChatIcon 
} from '@chakra-ui/icons';

// Wrap Chakra components with motion
const MotionBox = motion(Box);

const FeatureCard = ({ Icon, title, description, delay }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      mb={10}
    >
      <VStack spacing={4} align="center" textAlign="center">
        <Center
          bg="orange.500"
          w="60px"
          h="60px"
          borderRadius="full"
          color="white"
          mb={2}
        >
          <Icon boxSize={6} />
        </Center>
        <Heading as="h3" size="md" fontWeight="600">
          {title}
        </Heading>
        <Text color="gray.600" maxW="300px">
          {description}
        </Text>
      </VStack>
    </MotionBox>
  );
};

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Start the animation when component mounts
    setIsVisible(true);
  }, []);

  const features = [
    {
      Icon: CheckCircleIcon,
      title: "Trust and Reliability",
      description: "We ensure landlords rent to credible tenants. We verify every details, offering peace of mind.",
      delay: 0.3,
    },
    {
      Icon: TimeIcon,
      title: "Simplified Verification",
      description: "Tenants can request property inspections before renting. Our agents verify save time and reduce risks.",
      delay: 0.6,
    },
    {
      Icon: StarIcon,
      title: "Data Management",
      description: "We complete tenant verification and property checks quickly, ensuring you make confident decisions.",
      delay: 0.9,
    },
    {
      Icon: SpinnerIcon,
      title: "Fast and Transparent",
      description: "We prioritise speed and transparency in every step. All property checks and inspections are done quickly.",
      delay: 1.2,
    },
    {
      Icon: ViewIcon,
      title: "Detailed Tenant Profile",
      description: "Tenants can request property inspections before renting. Our agents verify to save time and reduce risks.",
      delay: 1.5,
    },
    {
      Icon: ChatIcon,
      title: "Mutual Understanding",
      description: "Our platform helps reduce misunderstandings, making the rental process smoother.",
      delay: 1.8,
    },
  ];

  return (
    <Box bg="white">
    <Box bg="white" py={20}>
      <Container maxW="container.xl">
        <VStack spacing={10}>
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.7 }}
            textAlign="center"
            px={4}
          >
            <Text color="orange.500" fontWeight="500" mb={2}>
              CONVICTION
            </Text>
            <Heading as="h2" size="xl" mb={5}>
              Why Choose Tivro
            </Heading>
            <Text fontSize="lg" maxW="container.md" mx="auto" color="gray.600">
              Tivro bridges the gap between landlords and tenants with seamless verification and trusted property inspection, ensuring secure and efficient rental process.
            </Text>
          </MotionBox>

          <Grid 
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} 
            gap={8}
            width="100%"
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                Icon={feature.Icon}
                title={feature.title}
                description={feature.description}
                delay={feature.delay}
              />
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
    </Box>
  );
};

export default FeaturesSection;