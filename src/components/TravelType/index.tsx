import { Flex } from "@chakra-ui/react";

import TravelItens from "./TravelItens";

const TravelType = () => {
  return (
    <Flex m="24" direction="row" justify="space-between">
      <TravelItens icon="images/icons/cocktail.svg" name="vida noturna" />
      <TravelItens icon="images/icons/surf.svg" name="praia" />
      <TravelItens icon="images/icons/building.svg" name="moderno" />
      <TravelItens icon="images/icons/museum.svg" name="clássico" />
      <TravelItens icon="images/icons/earth.svg" name="e mais..." />
    </Flex>
  );
};

export default TravelType;
