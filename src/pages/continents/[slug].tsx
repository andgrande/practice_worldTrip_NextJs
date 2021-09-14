import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next';
import { Header } from '../../components/Header';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Img } from '@chakra-ui/image';

interface ContinentDataProps {
    id: number;
    continentName: string;
    imageURL: string;
    slug: string;
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