import { Box, Stack, Heading } from "@chakra-ui/react";

interface SwiperContentProps {
  name: string;
  description: string;
  image: string;
}

const SwiperContent = ({ name, description, image }: SwiperContentProps) => {
  return (
    <Box
      align="center"
      bgImage={`url("${image}")`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      height="450"
    >
      <Stack align="center" p="40" spacing={4}>
        <Heading as="h2" fontSize="40" fontWeight="900" color="gray.50">
          {name}
        </Heading>
        <Heading fontSize="20" fontWeight="400" color="gray.50" as="p">
          {description}
        </Heading>
      </Stack>
    </Box>
  );
};

export default SwiperContent;
