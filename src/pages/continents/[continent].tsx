import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";

import { GetStaticPaths, GetStaticProps } from "next";

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

export default function Continent({ continent }: ContinentProps) {
  console.log(continent);

  return <></>;
}

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
