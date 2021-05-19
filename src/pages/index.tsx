import Head from "next/head";

import {
  Flex,
  Text,
  Box,
  Heading,
  Divider,
  Image,
  Stack,
} from "@chakra-ui/react";

import Header from "../components/Header";
import TravelType from "../components/TravelType";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import SwiperContent from "../components/SwiperContent";

SwiperCore.use([Navigation]);

export default function Home() {
  const continents = [
    {
      image: "/images/america-do-norte.png",
      name: "América do Norte",
      description: "O continente mais tecnologico",
    },
    {
      image: "/images/america-do-sul.png",
      name: "América do Sul",
      description: "O melhor continente",
    },
    {
      image: "/images/asia.png",
      name: "Ásia",
      description: "O continente mais populoso",
    },
    {
      image: "/images/africa.png",
      name: "África",
      description: "O continente mais colorido",
    },
    {
      image: "/images/continents/europa.png",
      name: "Europa",
      description: "O continente mais antigo",
    },
    {
      image: "/images/oceania.png",
      name: "Oceania",
      description: "O continente mais peculiar",
    },
  ];

  return (
    <Box>
      <Header />
      <Box
        bgImage='url("/images/Background.png")'
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height="335"
      >
        <Flex
          maxWidth="1240"
          h="100%"
          mx="auto"
          px="10"
          direction="column"
          align="flex-start"
          justify="center"
          position="relative"
        >
          <Heading
            as="h1"
            fontWeight="500"
            fontSize={["xl", "4xl"]}
            color="gray.50"
            mb="5"
          >
            6 Continentes, <Divider as="br" /> infinitas possibilidades
          </Heading>

          <Text maxWidth="524" fontSize={["sm", "xl"]} color="gray.100">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>

          <Image
            position="absolute"
            right="0"
            bottom="-35"
            src="/images/Airplane.svg"
            alt="Airplane"
          />
        </Flex>
      </Box>

      <TravelType />

      <Box m="8">
        <Heading as="h2" color="gray.500" fontWeight="500" textAlign="center">
          Vamos nessa? <Divider as="br" /> Então escolha seu continente
        </Heading>

        <Swiper navigation={true} color="yellow.500">
          {continents.map((continent) => (
            <SwiperSlide>
              <SwiperContent
                name={continent.name}
                description={continent.description}
                image={continent.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
