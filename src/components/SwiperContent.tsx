import { Box, Stack, Heading, Link } from "@chakra-ui/react";
import { useState } from "react";

interface SwiperContentProps {
  name?: string;
  description: string;
  image: string;
  slug: string;
}

const SwiperContent = ({
  name,
  description,
  image,
  slug,
}: SwiperContentProps) => {
  return (
    <Link as="a" href={`/continents/${slug}`}>
      <Box
        align="center"
        justify="center"
        bgImage={`url("${image}")`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        height="450"
        mt="8"
      >
        <Stack align="center" justify="center" pt="40" spacing={4}>
          <Heading
            as="h2"
            fontSize={["3xl", "5xl", "7xl"]}
            fontWeight="900"
            color="gray.50"
            boxShadow="1px rgba(0, 0, 0, 0.3)"
          >
            {name}
          </Heading>
          <Heading
            as="p"
            fontSize={["1xl", "2xl", "3xl"]}
            fontWeight="600"
            color="gray.100"
            boxShadow="1px rgba(0, 0, 0, 0.3)"
          >
            {description}
          </Heading>
        </Stack>
      </Box>
    </Link>
  );
};

export default SwiperContent;
