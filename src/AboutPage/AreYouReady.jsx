import React from 'react';
import { 
  Box, 
  Heading, 
  Text, 
  Button, 
  VStack, 
  Container, 
  Flex
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
const AreYouReady = () => {
    const navigate = useNavigate();
  return (
    <Box bg="white" color="black" minH="100vh">
      {/* Hero section with background image */}
      <Box
        position="relative"
        height="100vh"
        width="100%"
        overflow="hidden"
      >
        {/* Background image container */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          zIndex="0"
          bgColor="rgba(255, 255, 255, 0.8)" // Semi-transparent overlay
        >
          {/* You would add the actual background image here */}
          {/* For example: <Image src="/path/to/your-image.jpg" objectFit="cover" width="100%" height="100%" /> */}
        </Box>

        {/* Content overlay */}
        <Container maxW="container.xl" height="100%" position="relative" zIndex="1">
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="100%"
            px={4}
          >
            <VStack spacing={6} maxW="800px">
              <Heading 
                as="h1" 
                size="2xl" 
                fontWeight="bold"
                lineHeight="1.2"
              >
                Are you ready to make smart decisions fast?
              </Heading>
              
              <Text fontSize="xl" maxW="700px">
                Tivro bridges the gap between landlords and tenants with seamless verification and trusted
                property inspection, ensuring secure and efficient rental process.
              </Text>
              
              <Button
                size="lg"
                bg="#FF5722" 
                color="white"
                _hover={{ bg: "#E64A19" }} 
                borderRadius="full"
                px={8}
                py={6}
                mt={4}
                onClick={() => navigate("/signup")}>
                Get Started
              </Button>
            </VStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default AreYouReady;