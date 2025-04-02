import React from "react";
import { Box, Container, Heading, Text, VStack, Divider, Link } from "@chakra-ui/react";

const TermsAndConditions = () => {
  return (
    <Box width="100%" bg="white">
    <Container maxW="container.md" py={10} bg="white" color="black">
      <VStack align="start" spacing={4}>
        <Heading as="h1" fontSize="xl" fontWeight="bold">Welcome to Tivro Africa!</Heading>
        <Text>
          By accessing or using the Tivro Africa web application, you agree to be bound by the following Terms and
          Conditions. Please read them carefully before using our services. If you do not agree to these Terms and
          Conditions, you may not access or use Tivro Africa.
        </Text>

        <Heading as="h2" fontSize="lg" fontWeight="semibold">1. Introduction</Heading>
        <Text>
          Tivro Africa (the "App" or "we" or "us") is a web application that aims to assist users with navigating
          properties and prospective tenants in Africa. Tivro Africa provides information to make an informed decision
          when verifying a listing/property. By using this application, you agree to comply with and be bound by these
          Terms and Conditions.
        </Text>

        <Heading as="h2" fontSize="lg" fontWeight="semibold">2. User Eligibility</Heading>
        <Text>
          To use Tivro Africa, you must be at least 18 years old or the age of majority in your country of residence.
          By using our platform, you represent and warrant that you have the legal capacity to enter into these Terms
          and Conditions.
        </Text>

        <Heading as="h2" fontSize="lg" fontWeight="semibold">3. Account Registration</Heading>
        <Text>
          To access certain features of Tivro Africa, you may be required to create an account. You are responsible for
          ensuring the accuracy and completeness of the information submitted during registration. You agree to keep
          your account credentials secure and not to share them with others. Tivro Africa is not liable for any
          unauthorized access to your account resulting from your failure to protect your credentials.
        </Text>

        <Heading as="h2" fontSize="lg" fontWeight="semibold">4. User Responsibilities and Restrictions</Heading>
        <Text>
          You agree to use Tivro Africa solely for lawful purposes and in accordance with these Terms and Conditions.
          You agree not to:
        </Text>
        <Text>- Use the platform for any fraudulent, malicious, or harmful activity.</Text>
        <Text>- Attempt to gain unauthorized access to the platform, its data, or its user data.</Text>
        <Text>- Misrepresent any information related to properties or prospective tenants.</Text>
        <Text>- Use automated bots or software to access the platform without prior permission.</Text>

        <Heading as="h2" fontSize="lg" fontWeight="semibold">5. Service Limitations</Heading>
        <Text>
          Tivro Africa provides property and tenant verification tools but does not guarantee the accuracy,
          completeness, or availability of the information provided. Tivro Africa is not a tool to assist with
          decision-making, e.g., a substitute for independent due diligence. Tivro Africa reserves the right to
          modify, suspend, or discontinue any part of the service without notice at any time.
        </Text>

        <Heading as="h2" fontSize="lg" fontWeight="semibold">6. Third-Party Services</Heading>
        <Text>
          Tivro Africa may contain links to third-party websites or services that are not owned or controlled by us. We
          do not assume responsibility for the privacy policies, content, or services. Use these at your own risk.
        </Text>

        <Heading as="h2" fontSize="lg" fontWeight="semibold">7. Privacy</Heading>
        <Text>
          Tivro Africa values your privacy. Please review our Privacy Policy to understand how we collect, use, and
          share information about you.
        </Text>

        <Heading as="h2" fontSize="lg" fontWeight="semibold">8. Intellectual Property</Heading>
        <Text>
          All content, visuals, elements, and other materials on Tivro Africa are owned or licensed by us and are
          protected by copyright, trademarks, and other intellectual property laws. You may not use, copy, distribute,
          or modify any content from Tivro Africa without our express written permission.
        </Text>

        <Heading as="h2" fontSize="lg" fontWeight="semibold">9. Disclaimer of Warranties</Heading>
        <Text>
          Tivro Africa is provided on an "as-is" and "as-available" basis. We make no representations or warranties of
          any kind, express or implied, regarding the content or services of our platform.
        </Text>

        <Heading as="h2" fontSize="lg" fontWeight="semibold">10. Limitation of Liability</Heading>
        <Text>
          To the extent not prohibited by law, Tivro Africa shall not be liable for any direct, indirect, consequential
          damages arising from your use of the platform, including any loss of profits or revenue. You agree to
          indemnify us for any claims arising out of your use of the platform in violation of these Terms and
          Conditions.
        </Text>

        <Heading as="h2" fontSize="lg" fontWeight="semibold">11. Termination</Heading>
        <Text>
          We reserve the right to suspend or terminate your account and access to the platform if you violate these
          Terms and Conditions.
        </Text>

        <Heading as="h2" fontSize="lg" fontWeight="semibold">12. Changes to Terms and Conditions</Heading>
        <Text>
          We may update these Terms and Conditions periodically. We will notify you of significant changes by posting
          new Terms on our platform. Continued use of the platform after changes constitutes your acceptance.
        </Text>

        <Heading as="h2" fontSize="lg" fontWeight="semibold">13. Governing Law</Heading>
        <Text>
          These Terms and Conditions are governed by and construed in accordance with the laws of Nigeria, Ghana, and
          Kenya.
        </Text>

        <Heading as="h2" fontSize="lg" fontWeight="semibold">14. Contact</Heading>
        <Text>
          If you have any questions regarding these Terms and Conditions, please contact us at
          <Link color="blue.500"> support@tivroafrica.com</Link>.
        </Text>
      </VStack>
    </Container>
    </Box>
  );
};

export default TermsAndConditions;