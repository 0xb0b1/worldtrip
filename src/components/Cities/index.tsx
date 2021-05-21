import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";

interface CitiesProps {
  name: string;
  countryName: string;
  image: string;
  countryCode: string;
}

const Cities = ({ name, countryName, image, countryCode }: CitiesProps) => {
  return (
    <Box w="256px" p="2" mx={["auto", "0"]}>
      <Image
        borderTopRadius="4"
        src={image}
        alt={name}
        w="100%"
        h="173"
        objectFit="cover"
      />
      <Flex
        justify="space-between"
        align="center"
        p={6}
        border="1px"
        borderColor="yellow.100"
        borderTop="0"
        borderBottomRadius="4"
      >
        <Flex direction="column">
          <Heading fontSize="0.95rem" color="gray.800">
            {name}
          </Heading>
          <Text fontSize="" color="gray.400">
            {countryName}
          </Text>
        </Flex>

        <ReactCountryFlag
          countryCode={countryCode}
          arial-label={countryName}
          svg
          style={{
            fontSize: "2em",
            lineHeight: "2em",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </Flex>
    </Box>
  );
};

export default Cities;
