import { Box, Text, Heading, VStack, Avatar, Grid } from "@chakra-ui/react";

const testimonials = [
  {
    name: "Samuel Onah",
    role: "Software Developer",
    feedback:
      "Provides client identity verification through BVN, a basic credit score report, a unique verification certificate and ID, limited monthly verification and essential in-app and email notifications.",
  },
  {
    name: "Liam Johnson",
    role: "Systems Architect",
    feedback:
      "We enhance your identity verification experience by utilizing your BVN, a clear credit score overview, a distinct verification certificate, and your ID. Enjoy regular updates and convenient alerts through our app and email.",
  },
  {
    name: "Oliver Thompson",
    role: "Graphic Designer",
    feedback:
      "We assist you in verifying your identity effortlessly with your BVN, a clear and accessible credit score report, a unique verification certificate, and your ID. Enjoy monthly reviews and timely notifications sent through our app and email.",
  },
  {
    name: "Mia Rodriguez",
    role: "Data Analyst",
    feedback:
      "We make identity verification simple with your BVN, a straightforward credit score analysis, a customized verification certificate, and your ID. Plus, expect monthly reminders and valuable notifications directly in your app and inbox.",
  },
  {
    name: "Sophia Kim",
    role: "UX Researcher",
    feedback:
      "We help you confirm your identity with ease using your BVN, a concise credit score report, a personalized verification certificate, and your ID. Stay updated with monthly insights and practical notifications via our app and email.",
  },
  {
    name: "Ethan Patel",
    role: "Project Manager",
    feedback:
      "Our platform simplifies the identity verification process with your BVN, an easy-to-read credit score summary, a specific verification certificate, and your ID. You'll receive monthly updates and useful alerts through our app and email.",
  },
];

const Testimonials = () => {
  return (
    <Box width="100%" bg="white">
    <Box w="1440px" mx="auto" py={16} px={8} bg="white">
      <Text color="red.500" fontWeight="bold" textAlign="center" textTransform="uppercase">QUOTE</Text>
      <Heading as="h2" size="xl" mt={2} mb={4} fontWeight="bold" textAlign="center" color="black">
        What Our Users Are Saying
      </Heading>
      <Text mb={12} color="gray.600" textAlign="center">
        Tivro is here to make your life easier and foster tenant-landlord connection.
      </Text>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} p={6} bg="gray.100" borderRadius="lg" boxShadow="md">
            <Text color="black" mb={4}>{testimonial.feedback}</Text>
            <VStack align="start">
              <Avatar name={testimonial.name} size="sm" />
              <Text fontWeight="bold" color="black">{testimonial.name}</Text>
              <Text fontSize="sm" color="gray.600">{testimonial.role}</Text>
            </VStack>
          </Box>
        ))}
      </Grid>
    </Box>
    </Box>
  );
};

export default Testimonials;
