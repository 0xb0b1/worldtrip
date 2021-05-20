import { Box, Heading, Divider } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import SwiperContent from "../components/SwiperContent";

SwiperCore.use([Navigation, Pagination]);

const SwiperContainer = () => {
  const continents = [
    {
      image: "/images/continents/america-do-norte.jpg",
      name: "América do Norte",
      description: "O continente mais tecnologico",
    },
    {
      image: "/images/continents/america-do-sul.jpg",
      name: "América do Sul",
      description: "O melhor continente",
    },
    {
      image: "/images/continents/asia.jpg",
      name: "Ásia",
      description: "O continente mais populoso",
    },
    {
      image: "/images/continents/africa.jpg",
      name: "África",
      description: "O continente mais colorido",
    },
    {
      image: "/images/continents/europe.png",
      name: "Europa",
      description: "O continente mais antigo",
    },
    {
      image: "/images/continents/oceania.jpg",
      name: "Oceania",
      description: "O continente mais peculiar",
    },
  ];

  return (
    <Box m="10">
      <Heading as="h2" color="gray.500" fontWeight="500" textAlign="center">
        Vamos nessa? <Divider as="br" /> Então escolha seu continente
      </Heading>

      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={50}
      >
        {continents.map((continent, key) => (
          <SwiperSlide key={key}>
            <SwiperContent
              name={continent.name}
              description={continent.description}
              image={continent.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwiperContainer;
