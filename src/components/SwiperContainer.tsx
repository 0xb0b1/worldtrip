import { Box, Heading, Divider } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/core";
import SwiperContent from "../components/SwiperContent";

import { continents } from "./data/continentSlider";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SwiperContainer = () => {
  return (
    <Box mx="5" mt="20">
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
