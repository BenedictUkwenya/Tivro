import { Box, Heading, Text, VStack, IconButton, Collapse, Button } from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

const faqs = [
  {
    question: "Who is Tivro for?",
    answer:
      "Tivro Africa is a comprehensive platform designed to serve the needs of both property owners and tenants by providing reliable verification services. It helps property managers, landlords, and homeowners verify the authenticity of renters and subletters. Likewise, tenants can use Tivro Africa to verify the legitimacy and condition of apartments or properties before signing a lease. This two-way verification system ensures security and transparency, minimizing the risks of fraud for all involved parties.",
  },
  {
    question: "How does Tivro Africa work?",
    answer: "Tivro Africa operates through an efficient and thorough verification process tailored to both property owners and tenants. For property owners, Tivro Africa allows you to submit a potential tenant's details, and our platform runs background checks on their rental history, criminal records, and financial standing. For tenants, Tivro Africa helps ensure the property you are interested in is legitimate, by verifying the property's legal status, the landlord's authenticity, and the property's overall condition. This dual approach protects both tenants and landlords from fraudulent activities.",
  },
  {
    question: "Is Tivro Africa available in my country?",
    answer: "Tivro Africa is currently available in Nigeria, Ghana, and Kenya, with plans for expansion into additional African markets. We are committed to increasing accessibility and building trust across the rental market in various regions.",
  },
  {
    question: "Is Tivro Africa an app or a website?",
    answer: "At present, Tivro Africa operates as a web-based platform that you can access via a secure URL. While the platform is currently available as a website, we are exploring the possibility of launching a mobile app in the near future to further enhance accessibility and user experience.",
  },
  {
    question: "Who can use Tivro Africa?",
    answer: "Tivro Africa is designed for a wide range of users in the property ecosystem, including property managers, landlords, property lawyers, housing agents, landowners, and sublet owners. It is also beneficial to tenants seeking to verify the authenticity and safety of the property they intend to rent.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box width="100%" bg="white">
    <Box textAlign="center" py={10} px={5} maxW="800px" mx="auto" bg="white">
      <Text color="red.500" fontWeight="bold" textTransform="uppercase">FAQ</Text>
      <Heading as="h2" size="xl" mt={2} mb={4} fontWeight="bold" color="black">
        Frequently Asked Questions
      </Heading>
      <Text mb={8} color="gray.600">
        Tivro is here to make your life easier and foster tenant-landlord connection.
      </Text>
      <VStack spacing={4} align="stretch">
        {faqs.map((faq, index) => (
          <Box key={index} p={4} borderRadius="lg" bg={openIndex === index ? "red.100" : "gray.100"} boxShadow="md">
            <Box display="flex" justifyContent="space-between" alignItems="center" cursor="pointer" onClick={() => toggleFAQ(index)}>
              <Text fontWeight="bold" color="black">{faq.question}</Text>
              <IconButton
                icon={openIndex === index ? <ChevronUpIcon /> : <ChevronDownIcon />}
                variant="ghost"
                colorScheme="gray"
                aria-label={openIndex === index ? "Collapse answer" : "Expand answer"}
              />
            </Box>
            <Collapse in={openIndex === index} animateOpacity>
              <Text mt={2} color="black">{faq.answer}</Text>
            </Collapse>
          </Box>
        ))}
      </VStack>
      <Button colorScheme="red" mt={4} fontWeight="bold" variant="outline">See more</Button>
    </Box>
    </Box>
  );
};

export default FaqSection;
