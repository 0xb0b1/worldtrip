import { Flex, Heading, Text } from "@chakra-ui/react";

interface CityInfoProps {
  numberOf: number;
  legend: string;
}

const Info = ({ numberOf, legend }: CityInfoProps) => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Heading color="#FFBA08">{numberOf}</Heading>
      <Text color="gray.900">{legend}</Text>
    </Flex>
  );
};

export default Info;
