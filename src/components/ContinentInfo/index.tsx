import { HStack } from "@chakra-ui/react";
import Info from "./Info";

interface ContinentInfoProps {
  countries: number;
  languages: number;
  cities: number;
}

const ContinentInfo = ({
  countries,
  languages,
  cities,
}: ContinentInfoProps) => {
  return (
    <HStack spacing={10} mt={["4", "0"]}>
      <Info numberOf={countries} legend="países" />
      <Info numberOf={cities} legend="cidades +100" />
      <Info numberOf={languages} legend="linguas" />
    </HStack>
  );
};

export default ContinentInfo;
