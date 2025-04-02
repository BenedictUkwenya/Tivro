import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack,
  Center,
  IconButton,
  Image
} from '@chakra-ui/react';
import { TriangleUpIcon  } from '@chakra-ui/icons';

const LifeAtTivroSection = () => {
  const handlePlayVideo = () => {
    console.log("Play video clicked");
    // Implement video player functionality here
  };

  return (
    <Box width="100%" bg="white">
    <Container maxW="container.xl" py={16} bg="white" color="black">
      <VStack spacing={6} textAlign="center" mb={10}>
        <Text 
          color="orange.500" 
          fontWeight="medium" 
          fontSize="sm"
          px={3}
          py={1}
          borderRadius="md"
          bg="orange.50"
        >
          WE ARE HIRING
        </Text>
        
        <Heading as="h2" fontSize={{ base: "3xl", md: "4xl" }}>
          Life at Tivro
        </Heading>
        
        <Text 
          fontSize={{ base: "md", md: "lg" }} 
          color="gray.700" 
          maxW="3xl"
        >
          At Tivro, we believe in innovation, teamwork, and making an impact.
          <br />
          Here's what makes us unique...
        </Text>
      </VStack>

      <Box 
        position="relative" 
        borderRadius="xl" 
        overflow="hidden"
        maxW="container.lg"
        mx="auto"
      >
        {/* Video thumbnail */}
        <Box 
          position="relative"
          width="100%"
          height={{ base: "300px", md: "500px" }}
          borderRadius="xl"
          overflow="hidden"
        >
          <Image
            src="/maincareer2.jpeg"
            alt="Life at Tivro"
            objectFit="cover"
            width="100%"
            height="100%"
            fallbackSrc="https://via.placeholder.com/1200x670?text=Tivro+Team+Video"
          />
          
          {/* Semi-transparent overlay */}
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            bg="blackAlpha.300"
          />
        </Box>
        
        {/* Play button */}
        <Center
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <IconButton
            aria-label="Play video"
            icon={<TriangleUpIcon  />}
            size="lg"
            fontSize="2xl"
            isRound
            bg="orange.500"
            color="white"
            _hover={{ bg: "orange.600" }}
            boxShadow="lg"
            width="70px"
            height="70px"
            onClick={handlePlayVideo}
          />
        </Center>
        
        {/* Decorative element */}
        <Box
          position="absolute"
          bottom="-20px"
          left="-20px"
          zIndex="-1"
        >
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M140 70C140 31.3401 108.66 0 70 0C31.3401 0 0 31.3401 0 70C0 108.66 31.3401 140 70 140C108.66 140 140 108.66 140 70ZM15 70C15 39.6243 39.6243 15 70 15C100.376 15 125 39.6243 125 70C125 100.376 100.376 125 70 125C39.6243 125 15 100.376 15 70Z" fill="#FFA500" fillOpacity="0.2"/>
            <path d="M125 70C125 39.6243 100.376 15 70 15C39.6243 15 15 39.6243 15 70C15 100.376 39.6243 125 70 125C100.376 125 125 100.376 125 70ZM30 70C30 47.9086 47.9086 30 70 30C92.0914 30 110 47.9086 110 70C110 92.0914 92.0914 110 70 110C47.9086 110 30 92.0914 30 70Z" fill="#FFA500" fillOpacity="0.2"/>
            <path d="M110 70C110 47.9086 92.0914 30 70 30C47.9086 30 30 47.9086 30 70C30 92.0914 47.9086 110 70 110C92.0914 110 110 92.0914 110 70ZM45 70C45 56.1929 56.1929 45 70 45C83.8071 45 95 56.1929 95 70C95 83.8071 83.8071 95 70 95C56.1929 95 45 83.8071 45 70Z" fill="#FFA500" fillOpacity="0.2"/>
          </svg>
        </Box>
      </Box>
    </Container>
    </Box>
  );
};

export default LifeAtTivroSection;