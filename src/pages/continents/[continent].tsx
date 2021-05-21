import React from "react";

import {
  Box,
  Flex,
  Heading,
  Text,
  useBreakpointValue,
  SimpleGrid,
  HStack,
} from "@chakra-ui/react";

import { GetStaticPaths, GetStaticProps } from "next";

import Header from "../../components/Header";
import ContinentInfo from "../../components/ContinentInfo";
import Cities from "../../components/Cities";

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
      <Header hasBackLink />

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
          justify="space-evenly"
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

          <HStack spacing={10} mt={["4", "0"]}>
            <ContinentInfo
              countries={continent.numberOfCountries}
              cities={continent.amountMostPopularCities}
              languages={continent.numberOfLanguages}
            />
          </HStack>
        </Flex>
      </Box>

      <Box>
        <Heading
          as="h1"
          color="gray.600"
          fontWeight="600"
          fontSize={["1xl", "3xl", "6xl"]}
          textAlign="center"
        >
          Cidades +100
        </Heading>

        <SimpleGrid columns={4} spacing={[5, 10]} my={["5", "45px"]}>
          {continent.mostPopularCities.map((city) => (
            <Cities
              name={city.cityName}
              countryName={city.countryName}
              image={city.cityImage}
              countryCode={city.countryCode}
            />
          ))}
        </SimpleGrid>
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
