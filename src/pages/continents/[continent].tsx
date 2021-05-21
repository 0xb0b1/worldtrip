import React from "react";

import {
  Box,
  Center,
  Flex,
  Heading,
  Stack,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";

import { GetStaticPaths, GetStaticProps } from "next";

import Header from "../../components/Header";
import ContinentInfo from "../../components/ContinentInfo";

import { api } from "../../services/api";

type ContinentType = {
  id: number;
  name: string;
  description: string;
  bannerImage: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  amountMostPopularCities: number;
  mostPopularCities: [
    {
      cityName: string;
      countryName: string;
      cityImage: string;
      countryCode: string;
    }
  ];
};

interface ContinentProps {
  continent: ContinentType;
}

const Continent = ({ continent }: ContinentProps) => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Box
        bgImage={`url(${continent.bannerImage})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        h={["250", "400"]}
      >
        <Box maxW="1240" h="100%" mx="auto" px={10} position="relative">
          <Flex
            align="center"
            justify={isWideVersion ? "flex-start" : "center"}
            h="100%"
          >
            <Heading fontSize={["3xl", "4xl", "6xl"]}>{continent.name}</Heading>
          </Flex>
        </Box>
      </Box>

      <Box maxW="1240" h="100%" mx="auto" px={["4", "10"]}>
        <Flex
          direction={isWideVersion ? "row" : "column"}
          justify="space-between"
          align="center"
          mt={["6", "20"]}
          mb={["8", "20"]}
        >
          <Text
            maxW="600"
            mb="10"
            fontSize={["sm", "2xl"]}
            lineHeight={["5", "9"]}
            color="gray.800"
            textAlign="justify"
          >
            {continent.description}
          </Text>

          <ContinentInfo
            countries={continent.numberOfCountries}
            languages={continent.numberOfLanguages}
            cities={continent.amountMostPopularCities}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continent } = params;

  const response = await api.get(`/continents?slug=${continent}`);

  const continentInfo: ContinentType = response.data[0];

  return {
    props: {
      continent: continentInfo,
    },
  };
};
