import Head from 'next/head'
import { Box, Flex, Img, Text, useMediaQuery } from '@chakra-ui/react';
import { Header } from '../components/Header'
import { ContinentsSwiper } from '../components/Swiper';
import AttractionsBanner from '../components/AttractionsBanner';

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

        <AttractionsBanner />

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
