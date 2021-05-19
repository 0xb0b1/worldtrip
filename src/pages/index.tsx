import Head from "next/head";

import { Flex, Text, Box, Heading, Divider, Image } from "@chakra-ui/react";

import Header from "../components/Header";
import TravelType from "../components/TravelType";

import SwiperContainer from "../components/SwiperContainer";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Home | worldtrip</title>
      </Head>

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

      <SwiperContainer />
    </Box>
  );
}
