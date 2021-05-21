import { Flex, Heading, Text, Tooltip } from "@chakra-ui/react";

interface CityInfoProps {
  numberOf: number;
  legend: string;
  hasToolTip?: boolean;
}

const Info = ({ numberOf, legend, hasToolTip = false }: CityInfoProps) => {
  if (hasToolTip) {
    return (
      <Tooltip
        label="100 cidades mais visitadas do mungo"
        bg="gray.600"
        color="gray.50"
      >
        <Flex direction="column" align="center" justify="center">
          <Heading color="#FFBA08">{numberOf}</Heading>
          <Text
            fontSize={["1xl", "2xl", "3xl"]}
            fontWeight="600"
            color="gray.500"
          >
            {legend}
          </Text>
        </Flex>
      </Tooltip>
    );
  }

  return (
    <Flex direction="column" align="center" justify="center">
      <Heading color="#FFBA08">{numberOf}</Heading>
      <Text fontSize={["1xl", "2xl", "3xl"]} fontWeight="600" color="gray.500">
        {legend}
      </Text>
    </Flex>
  );
};

export default Info;
