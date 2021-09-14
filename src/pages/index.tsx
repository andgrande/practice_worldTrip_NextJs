import Head from 'next/head'
import { Box, Flex, Img, SimpleGrid, Text, useMediaQuery } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { ContinentsSwiper } from '../components/Swiper';

export default function Home() {
  const [ isLargerThan1000 ] = useMediaQuery("(min-width: 1000px)")

  console.log(isLargerThan1000);
  
  return (
    <>
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Flex flexDirection="column" h="100vh" w="100" align="center" >
        <Header />

        <Flex
          w="100%"
          h={ isLargerThan1000 ? '335px' : '163px' }
          backgroundImage="/assets/Sky-banner.png"
          backgroundRepeat="revert"
          backgroundSize="cover"
          mx="auto"
        >
          <Flex
            direction="row"
            mx="auto"
          >
            <Box
              ml={{ base: "16px", sm: "47px", md: "78px", lg: "140px" }}
              alignSelf="center"
            >
              <Text
                as="p"
                color="gray.50"
                // fontSize={"36"}
                fontSize={{ base: "20px", md: "36px", lg: "36px" }}
                lineHeight="13,5"
                w={ isLargerThan1000 ? '426px' : '80%' }
              >
                5 Continentes,
                <Text>infinitas possibilidades.</Text>
              </Text>
              <Text 
                as="p"
                color="gray.300"
                fontSize={{ base: "14px", md: '20px', lg: "20px" }}
                lineHeight="7,5"
                w={ isLargerThan1000 ? '524px' : '80%' }
                mt={{ base: 2, md: 5 }}
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Box>

            {isLargerThan1000 &&
              <Img
                src='/assets/Airplane.png'
                alt="Airplane"
                w={{ md: 347, lg: 417 }}
                h={{ md: 225, lg: 270 }}
                mt="109"
                mr="140"
                ml={{ md: "100", lg: "205", xl: "410" }}
              />
            }

          </Flex>
        </Flex>

        <SimpleGrid
          flex="1"
          maxWidth={1440}
          gap="100px" 
          minChildWidth="100px"
          align="center"
          // spacing="100px"
        >
          {/* Iterate from API */}
          <Box 
            mx="auto" 
            // px={["4", "8"]}
            h={145}
            mt={113}
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
            mt={113}
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
            mt={113}
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
            mt={113}
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
            mt={113}
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

        <hr
          style={{ width: '90px', border: '1px solid #47585B', marginTop: '80px' }}
        />
        
        <Flex>
          <Text
            as="p"
            color='gray.800'
            fontWeight='500'
            fontSize={{ base: "20px", md: "36px", lg: "36px" }}
            lineHeight="13,5"
            align="center"
            justifyContent="center"
            my="52px"
          >
            Vamos nessa?
            <Text>Então escolha seu continente</Text>
          </Text>
          
        </Flex>

        <Flex
          w="100%"
          h="300px"
        >
          <ContinentsSwiper />
        </Flex>

      </Flex>
    </>
  )
}
