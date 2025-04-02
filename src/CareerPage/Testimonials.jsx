import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  SimpleGrid, 
  Flex, 
  Avatar, 
  VStack,
  Container,
  useColorModeValue
} from '@chakra-ui/react';

// Sample data for testimonials
const testimonials = [
  {
    name: 'Samuel Onah',
    role: 'Software Developer',
    image: '/path/to/samuel-image.jpg', // Replace with actual image path
    content: 'We make identity verification simple with your BVN, a straightforward credit score analysis, a customized verification certificate, and your ID. Plus, expect monthly reminders and valuable notifications directly in your app and inbox.'
  },
  {
    name: 'Liam Johnson',
    role: 'Systems Architect',
    image: '/path/to/liam-image.jpg', // Replace with actual image path
    content: 'We help you confirm your identity with ease using your BVN, a concise credit score report, a personalized verification certificate, and your ID. Stay updated with monthly insights and practical notifications via our app and email.'
  },
  {
    name: 'Oliver Thompson',
    role: 'Graphic Designer',
    image: '/path/to/oliver-image.jpg', // Replace with actual image path
    content: 'Our platform simplifies the identity verification process with your BVN, an easy-to-read credit score summary, a specific verification certificate, and your ID. You\'ll receive monthly updates and useful alerts through our app and email.'
  },
  {
    name: 'Mia Rodriguez',
    role: 'Data Analyst',
    image: '/path/to/mia-image.jpg', // Replace with actual image path
    content: ''  // Add content if needed
  },
  {
    name: 'Sophia Kim',
    role: 'HR Specialist',
    image: '/path/to/sophia-image.jpg', // Replace with actual image path
    content: ''  // Add content if needed
  },
  {
    name: 'Ethan Patel',
    role: 'Project Manager',
    image: '/path/to/ethan-image.jpg', // Replace with actual image path
    content: ''  // Add content if needed
  }
];

// Common quote at the top
const commonQuote = "Joining Tivro has been the best decision for my career. It's fulfilling to help landlords and tenants make informed decisions!";

const TestimonialsSection = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box py={16} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={8} mb={12} textAlign="center">
          <Heading as="h2" size="xl" fontWeight="bold">
            What Our Agents Are Saying
          </Heading>
          <Text fontSize="md" color="gray.600" maxW="container.md">
            Tivro is here to make your life easier and foster tenant-landlord connection.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              bg={cardBgColor}
              p={6}
              rounded="md"
              shadow="sm"
              height="100%"
            >
              {/* Quote section */}
              {index < 3 && (
                <Box mb={6}>
                  <Text fontStyle="italic" fontSize="md">
                    {commonQuote}
                  </Text>
                </Box>
              )}

              {/* Testimonial content */}
              {testimonial.content && (
                <Box mb={6}>
                  <Text fontSize="md">{testimonial.content}</Text>
                </Box>
              )}

              {/* Person info */}
              <Flex align="center">
                <Avatar 
                  src={testimonial.image} 
                  name={testimonial.name} 
                  size="md" 
                  mr={4} 
                />
                <Box>
                  <Text fontWeight="bold" fontSize="md">{testimonial.name}</Text>
                  <Text fontSize="sm" color="gray.600">{testimonial.role}</Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;