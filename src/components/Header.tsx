import { Flex, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      width="100%"
      pt="4"
      pb="4"
      align="center"
      justify="center"
    >
      <Image src="/images/Logo.svg" alt="Logo" />
    </Flex>
  );
};

export default Header;
