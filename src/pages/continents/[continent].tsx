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
import CityInfo from "../../components/CityInfo";

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
        h={["150", "500"]}
      >
        {isWideVersion ? (
          <Flex align="flex-end" p="20" h="100%">
            <Heading>{continent.name}</Heading>
          </Flex>
        ) : (
          <Center w="100%" h="100%">
            <Text fontSize={["1xl", "3xl", "5xl"]} fontWeight="500">
              {continent.name}
            </Text>
          </Center>
        )}
      </Box>

      <Box maxW="1240" h="100%" mx="auto" px={["4", "10"]}>
        <Flex
          direction={["column", "row"]}
          justify="space-between"
          align="center"
          m="10"
          mt={["6", "20"]}
          mb={["8", "20"]}
        >
          <Text
            maxW="600"
            fontSize={["sm", "2xl"]}
            lineHeight={["5", "9"]}
            color="gray.800"
            textAlign="justify"
          >
            {continent.description}
          </Text>
          <HStack spacing={10} mt={["4", "0"]}>
            <CityInfo numberOf={continent.numberOfCountries} legend="países" />
            <CityInfo numberOf={continent.numberOfLanguages} legend="linguas" />
            <CityInfo
              numberOf={continent.amountMostPopularCities}
              legend="cidades +100"
            />
          </HStack>
        </Flex>

        <div></div>
      </Box>
    </Box>
  );
};

export default Continent;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
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
