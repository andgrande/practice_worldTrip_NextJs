import { Box, SimpleGrid, Text, Img, Flex } from "@chakra-ui/react";

interface PopularCitiesProps {
    cities: {
        cityId: number;
        cityName: string;
        cityCountry: string;
        cityFlag: string;
        cityImg: string;
    }[];
}

export default function PopularCities({ cities }: PopularCitiesProps) {
    return (
        <SimpleGrid
            columns={4}
            spacing={25}
            minChildWidth="256px"
            pb={50}
        >
            {cities.map(city => (
                <Box 
                    key={city.cityName}
                    width="256px"
                >
                    <Img src={`${city.cityImg}`} alt={city.cityName} />
                    <Flex
                        justifyContent="space-between"
                        align="center"
                        px={6}
                        borderRadius="4px"
                        border="1px solid rgba(255, 186, 8, 0.5)"
                        borderTop="white"
                    >
                        <Box>
                            <Text
                                mt={18}
                                fontSize="20px"
                                fontWeight="600"
                                color="gray.800"
                            >{city.cityName}</Text>
                            <Text
                                mt={3}
                                mb={6}
                                ontSize="16px"
                                fontWeight="500"
                                color="gray.500"
                            >{city.cityCountry}</Text>
                        </Box>
                        <Img src={`${city.cityFlag}`} alt={city.cityCountry} borderRadius="full" boxSize="30px" />
                    </Flex>
                </Box>
            ))}

        </SimpleGrid>
    )
}