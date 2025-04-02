import React, { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  Icon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const FAQAccordion = ({ category = "General Questions" }) => {
  // Sample FAQ data structure - you would replace this with your actual data
  const faqData = {
    "General Questions": [
      {
        question: "How does Tivro Africa work?",
        answer: "Tivro Africa works as a digital platform connecting property owners and tenants. Our platform streamlines property management processes, makes payments easier, and provides tools for both landlords and tenants to communicate effectively."
      },
      {
        question: "Is Tivro Africa available in my country?",
        answer: "Tivro Africa is currently available in select African countries. We're continuously expanding our reach. Please check our coverage page or contact our support team to verify availability in your specific location."
      },
      {
        question: "Is Tivro Africa an app or a website?",
        answer: "Tivro Africa is available as both a web platform and a mobile app. You can access our services through our website or download our mobile app from the App Store or Google Play Store."
      },
      {
        question: "Who can use Tivro Africa?",
        answer: "Tivro Africa is designed for property owners, property managers, tenants, and real estate professionals across Africa. Anyone involved in the rental property ecosystem can benefit from our platform."
      }
    ],
    "Property Owner & Managers": [
      // Similar structure with property owner related questions
      {
        question: "How does Tivro Africa work?",
        answer: "For property owners and managers, Tivro Africa provides tools to list properties, screen tenants, collect rent, manage maintenance requests, and generate financial reports - all from one dashboard."
      },
      {
        question: "Is Tivro Africa available in my country?",
        answer: "Our property management tools are available in several African countries. Contact us to confirm availability in your region."
      },
      {
        question: "Is Tivro Africa an app or a website?",
        answer: "Property owners can manage their properties through both our web platform and mobile app, providing flexibility to manage your properties from anywhere."
      },
      {
        question: "Who can use Tivro Africa?",
        answer: "Any property owner or manager with residential or commercial rental properties can use Tivro Africa to streamline their property management operations."
      }
    ],
    "Tenants & Renters": [
      // Tenant specific questions
      {
        question: "How does Tivro Africa work?",
        answer: "For tenants, Tivro Africa offers an easy way to find properties, apply for rentals, pay rent online, submit maintenance requests, and communicate with landlords - all through one convenient platform."
      },
      {
        question: "Is Tivro Africa available in my country?",
        answer: "Our tenant services are available in several African countries. You can check availability in your area through our website."
      },
      {
        question: "Is Tivro Africa an app or a website?",
        answer: "Tenants can access Tivro services through both our mobile app and website, making it convenient to manage your rental experience from any device."
      },
      {
        question: "Who can use Tivro Africa?",
        answer: "Anyone looking to rent property or currently renting can use Tivro Africa. Our platform is designed to make the rental experience smoother for all tenants."
      }
    ],
    "Security & Trust": [
      // Security related questions
      {
        question: "How does Tivro Africa work?",
        answer: "Tivro Africa implements bank-level security protocols to protect all user data and transactions. We use encryption, secure payment gateways, and regular security audits to maintain a trusted platform."
      },
      {
        question: "Is Tivro Africa available in my country?",
        answer: "Our security features are consistent across all regions where Tivro operates. We comply with local data protection regulations in each country we serve."
      },
      {
        question: "Is Tivro Africa an app or a website?",
        answer: "Both our app and website implement the same high-level security measures to protect your information regardless of how you access Tivro Africa."
      },
      {
        question: "Who can use Tivro Africa?",
        answer: "Anyone concerned about security in property transactions can trust Tivro Africa. We've designed our platform with security as a top priority for all users."
      }
    ]
  };

  return (
    <Box width="100%" bg="white" color="black" paddingTop="200px">
    <Container maxW="container.md" py={8}>
      {Object.keys(faqData).map((section, sectionIndex) => (
        <Box key={sectionIndex} mb={8}>
          <Flex align="center" mb={2}>
            <Text fontWeight="bold" fontSize="lg">{section}</Text>
            <Divider flex="1" ml={4} borderColor={section === "General Questions" ? "#FF4500" : "gray.200"} borderWidth={1} />
          </Flex>
          
          <Accordion allowToggle>
            {faqData[section].map((item, itemIndex) => (
              <AccordionItem 
                key={itemIndex} 
                border="none" 
                mb={2}
              >
                <h2>
                  <AccordionButton 
                    py={4} 
                    px={0}
                    _hover={{ bg: "transparent" }}
                  >
                    <Box flex="1" textAlign="left">
                      <Text>{item.question}</Text>
                    </Box>
                    <AccordionIcon as={AddIcon} />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} px={0}>
                  <Text color="gray.600">{item.answer}</Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      ))}
    </Container>
    </Box>
  );
};

export default FAQAccordion;