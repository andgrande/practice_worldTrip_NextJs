import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next';
import { Header } from '../../components/Header';
import ContinentsStats from '../../components/ContinentsStats';
import { Box, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { Img } from '@chakra-ui/image';
import PopularCities from '../../components/PopularCities';

interface ContinentDataProps {
    id: number;
    continentName: string;
    imageURL: string;
    slug: string;
    story: string;
    cities: {
        cityId: number;
        cityName: string;
        cityCountry: string;
        cityFlag: string;
        cityImg: string;
    }[];
}

interface ContinentData {
    continentData: ContinentDataProps;
}

export default function Continents({ continentData }: ContinentData) {
    const inPlusHundredCities = continentData[0].cities.length;

    return (
        <>
            <Head>
                <title>{continentData[0].continentName} | WorldTrip</title>
            </Head>

            <Flex flexDirection="column" h="100vh" w="100%" maxWidth={1440} align="center" mx="auto">
                <Header />

                <Flex 
                    width="100%"
                    maxWidth={1440}
                    maxHeight={500}
                    align="center"
                    justify="center"
                >
                    <Img src={continentData[0].imageURL} alt={continentData[0].continentName} boxSize="100%" />
                    
                </Flex>
                <Text
                    as="p"
                    color="gray.50"
                    fontWeight="600"
                    fontSize={{ base: "28px", md: "36px" }}
                    alignSelf="flex-start"
                    mt={{base: "-100px", sm: "-150px", lg: "-100px"}}
                    ml={{base: "40%", lg: "140px"}}
                >{continentData[0].continentName}</Text>

                <Flex 
                    mt={{ base: "100px", sm: "150px", lg: "100px" }}
                    mx="140px"
                >
                    <SimpleGrid
                        columns={2}
                        spacingX={70}
                        spacingY={4}
                        minChildWidth="300px"
                    >
                        <Box>
                            <Text
                                fontSize={{ base: "14px", lg: "24px" }}
                                fontWeight="400"
                                lineHeight={{ base: "21px", lg: "36px" }}
                                color="gray.800"
                                textAlign="justify"
                            >{continentData[0].story}</Text>
                        </Box>

                        <Flex
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >

                            <ContinentsStats statsAmount={20} statsTitle="países" />
                            <ContinentsStats statsAmount={40} statsTitle="línguas" />
                            <ContinentsStats statsAmount={inPlusHundredCities} statsTitle="cidades +100" hasInfo={true}/>

                        </Flex>
                    </SimpleGrid>
                </Flex>

                <Flex 
                    my={{ base: "32px", md: "80px" }}
                    direction="column" 
                    mx="140px"
                    // px={{md: "140px"}}
                    w="80%"
                    justifyContent="center"
                    justify="center"
                >
                    <Text 
                        as="p"
                        color="gray.800"
                        fontWeight="500"
                        fontSize={{ base: "28px", md: "36px" }}
                        mb={{ base: "20px", md: "40px" }}
                    >Cidades +100</Text>

                    <PopularCities cities={continentData[0].cities}/>
                </Flex>
            </Flex>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [
            // { params: { slug:  } }
        ],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params;
    let continentData = [];

    try {
        continentData = await fetch(`http://localhost:3333/continentPopularCities?slug=${slug}`)
        .then(response => response.json())
        .then((info) => info)
        .catch(() => console.log('failed to fetch'))
    } catch (error) {
        console.log('Failure to retrieve data')
    }

    // console.log(JSON.stringify(continentData, null, 2))
    
    return {
        props: {
            continentData
        }
    }
}