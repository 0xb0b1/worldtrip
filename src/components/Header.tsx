import { Flex, Icon, Image, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

import { FiChevronLeft } from "react-icons/fi";

interface HeaderProps {
  hasBackLink?: boolean;
}

const Header = ({ hasBackLink = false }: HeaderProps) => {
  return (
    <Flex
      as="header"
      width="100%"
      pt="4"
      pb="4"
      align="center"
      justify="center"
    >
      {hasBackLink && (
        <Link href="/">
          <ChakraLink position="absolute" left={["18px", "60px"]}>
            <Icon
              color="#47585B"
              as={FiChevronLeft}
              fontSize={["1.4rem", "1.8rem"]}
            />
          </ChakraLink>
        </Link>
      )}

      <Image h={["8", "10"]} src="/images/Logo.svg" alt="Logo" />
    </Flex>
  );
};

export default Header;
