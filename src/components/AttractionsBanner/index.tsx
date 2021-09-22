import { Box, Img, SimpleGrid, Text } from '@chakra-ui/react';

export default function AttractionsBanner() {
    return (
        <SimpleGrid
          columns={5}
          minChildWidth="150px"
          align="center"
          spacing={50}
        >
          {/* Iterate from API */}
          <Box 
            mx="auto" 
            // px={["4", "8"]}
            h={145}
            mt={{ sm: "50px" }}
            w="150px"
          >
            <Img
              src="/assets/attractions/cocktail.png"
              alt="Vida noturna"
              mx="auto"
            />
            <Text
              as="p"
              color="gray.800"
              fontSize={{ base: "18px", md: '24px', lg: "24px" }}
              fontWeight='600'
              mt={{ base: 4, md: 6 }}
            >vida noturna</Text>
          </Box>
          
          <Box 
            mx="auto" 
            // px={["4", "8"]}
            h={145}
            mt={{ sm: "50px" }}
            w="150px"
          >
            <Img
              src="/assets/attractions/surf.png"
              alt="Praia"
              mx="auto"
            />
            <Text
              as="p"
              color="gray.800"
              fontSize={{ base: "18px", md: '24px', lg: "24px" }}
              fontWeight='600'
              mt={{ base: 4, md: 6 }}
            >praia</Text>
          </Box>
          
          <Box 
            mx="auto" 
            // px={["4", "8"]}
            h={145}
            mt={{ sm: "50px" }}
            w="150px"
          >
            <Img
              src="/assets/attractions/building.png"
              alt="Moderno"
              mx="auto"
            />
            <Text
              as="p"
              color="gray.800"
              fontSize={{ base: "18px", md: '24px', lg: "24px" }}
              fontWeight='600'
              mt={{ base: 4, md: 6 }}
            >moderno</Text>
          </Box>

          <Box 
            mx="auto" 
            // px={["4", "8"]}
            h={145}
            mt={{ sm: "50px" }}
            w="150px"
          >
            <Img
              src="/assets/attractions/museum.png"
              alt="Clássico"
              mx="auto"
            />
            <Text
              as="p"
              color="gray.800"
              fontSize={{ base: "18px", md: '24px', lg: "24px" }}
              fontWeight='600'
              mt={{ base: 4, md: 6 }}
            >clássico</Text>
          </Box>

          <Box 
            mx="auto" 
            // px={["4", "8"]}
            h={145}
            mt={{ sm: "50px" }}
            w="150px"
          >
            <Img
              src="/assets/attractions/earth.png"
              alt="Planeta"
              mx="auto"
            />
            <Text
              as="p"
              color="gray.800"
              fontSize={{ base: "18px", md: '24px', lg: "24px" }}
              fontWeight='600'
              mt={{ base: 4, md: 6 }}
            >e mais...</Text>
          </Box>

        </SimpleGrid>
    )
}