import { Box, Heading, Divider } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/core";
import SwiperContent from "../components/SwiperContent";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SwiperContainer = () => {
  const continents = [
    {
      image: "/images/continents/america-do-norte.jpg",
      name: "América do Norte",
      slug: "america-do-norte",
      description: "O continente mais tecnologico",
    },
    {
      image: "/images/continents/america-do-sul.jpg",
      name: "América do Sul",
      slug: "america-do-sul",
      description: "O melhor continente",
    },
    {
      image: "/images/continents/asia.jpg",
      name: "Ásia",
      slug: "asia",
      description: "O continente mais populoso",
    },
    {
      image: "/images/continents/africa.jpg",
      name: "África",
      slug: "africa",
      description: "O continente mais colorido",
    },
    {
      image: "/images/continents/europe.png",
      name: "Europa",
      slug: "europa",
      description: "O continente mais antigo",
    },
    {
      image: "/images/continents/oceania.jpg",
      name: "Oceania",
      slug: "oceania",
      description: "O continente mais peculiar",
    },
  ];

  return (
    <Box m="20">
      <Heading as="h2" color="gray.500" fontWeight="500" textAlign="center">
        Vamos nessa? <Divider as="br" /> Então escolha seu continente
      </Heading>

      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={50}
        style={{ width: "100%", flex: "1", height: "100%" }}
      >
        {continents.map((continent, key) => (
          <SwiperSlide key={key}>
            <SwiperContent
              name={continent.name}
              description={continent.description}
              image={continent.image}
              slug={continent.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default SwiperContainer;
