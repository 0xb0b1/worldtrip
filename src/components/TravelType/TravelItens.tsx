import {
  Box,
  Stack,
  Flex,
  Text,
  Image,
  useBreakpointValue,
  Tooltip,
} from "@chakra-ui/react";

interface TravelItensProps {
  icon: string;
  name: string;
}

const TravelItens = ({ icon, name }: TravelItensProps) => {
  const isMediumVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  if (!isMediumVersion) {
    return (
      <Box>
        <Stack spacing="4">
          <Flex align="center" justify="center" direction="column">
            <Tooltip label={name} aria-label={name}>
              <Image h="20" src={icon} alt={name} />
            </Tooltip>
          </Flex>
        </Stack>
      </Box>
    );
  }

  return (
    <Box>
      <Stack spacing="4">
        <Flex align="center" justify="center" direction="column">
          <Image h="20" src={icon} alt={name} />
          <Text fontWeight="700" color="gray.500" mt="4">
            {name}
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};

export default TravelItens;
