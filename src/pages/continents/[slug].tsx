import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next';
import { Header } from '../../components/Header';
import ContinentsStats from '../../components/ContinentsStats';
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/layout';
import { Img } from '@chakra-ui/image';

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
    }[];
}

interface ContinentData {
    continentData: ContinentDataProps;
}

export default function Continents({ continentData }: ContinentData) {

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
                    <Img src={continentData[0].imageURL} alt={continentData[0].continentName} fit />
                    
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
                            <ContinentsStats statsAmount={80} statsTitle="cidades +100" hasInfo={true}/>

                        </Flex>
                    </SimpleGrid>
                </Flex>
            </Flex>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [
            { params: { slug: 'europe'} }
        ],
        fallback: true,
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
    
    return {
        props: {
            continentData
        }
    }
}