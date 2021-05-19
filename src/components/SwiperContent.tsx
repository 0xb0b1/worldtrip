import { Box, Stack, Heading, Link } from "@chakra-ui/react";

interface SwiperContentProps {
  name: string;
  description: string;
  image: string;
}

const SwiperContent = ({ name, description, image }: SwiperContentProps) => {
  return (
    // <Link as="a" href="#">
    <Box
      align="center"
      bgImage={`url("${image}")`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      height="450"
      mt="8"
    >
      <Stack align="center" p="40" spacing={4}>
        <Heading
          as="h2"
          fontSize="6xl"
          fontWeight="900"
          color="gray.50"
          boxShadow="1px rgba(0, 0, 0, 0.3)"
        >
          {name}
        </Heading>
        <Heading
          as="p"
          fontSize="2xl"
          fontWeight="600"
          color="gray.100"
          boxShadow="1px rgba(0, 0, 0, 0.3)"
        >
          {description}
        </Heading>
      </Stack>
    </Box>
    // </Link>
  );
};

export default SwiperContent;
