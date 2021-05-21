import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";

const Cities = () => {
  return (
    <Box color="gray.700">
      <Flex justify="center" mx="auto">
        <Heading>Cidades +100</Heading>
      </Flex>
      <SimpleGrid columns={2} spacing={2}></SimpleGrid>
    </Box>
  );
};

export default Cities;
