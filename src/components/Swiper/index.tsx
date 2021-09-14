import SwiperCore, {
    Autoplay,Pagination,Navigation
  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Flex, Text } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';

SwiperCore.use([Autoplay,Pagination,Navigation]);

interface ContinentsSwiperData {
    id: number;
    title: string;
    description: string;
    imageURL: string;
}

export function ContinentsSwiper() {
    const [ continents, setContinents ] = useState<ContinentsSwiperData[] | []>([{
        id: null,
        title: 'loading',
        description: 'loading',
        imageURL: 'loading',
    }]);

    useEffect(() => {
        fetch('http://localhost:3333/continents/')
        .then(async response => await response.json())
        .then(info => setContinents(info))
        .catch(() => console.log('failed to fetch'))
    }, []);

    return (
            <Swiper 
                spaceBetween={2} 
                centeredSlides={true} 
                autoplay={{ "delay": 5000, "disableOnInteraction": false }} 
                pagination={{ "clickable": true }} 
                navigation={ true } 
                draggable= { true }
                className="mySwiper"
            >
                {continents.map(continent => (
                    <SwiperSlide key={continent.id}>
                        <Flex
                            w={{ base: '100%', md: 1240}}
                            h={{ base: "250px", md: "450px" }}
                            justifyContent="center"
                            alignItems="center"
                            backgroundImage={continent.imageURL}
                            backgroundSize="cover"
                            direction="column"
                        >
                            <Text
                                color="gray.50"
                                fontSize={{ base: "24px", md: "48px" }}
                                fontWeight="700"
                                // lineHeight="13,5"
                            >
                                {continent.title}
                            </Text>

                            <Text 
                                color="gray.50"
                                fontSize={{ base: "14px", md: "24px" }}
                                fontWeight="700"
                                // lineHeight="13,5"
                            >{continent.description}</Text>                                
                        </Flex>
                    </SwiperSlide>

                ))}
        </Swiper>
    )
}