import { Flex, Image } from "@chakra-ui/react";
import logoIgniteLabIcon from "../../assets/logo-ignitelab.png";

export const Header = () => {
  return (
    <Flex
      as="header"
      bg="gray.700"
      w="100%"
      h="70px"
      alignItems="center"
      justifyContent="center"
      borderBottom="1px solid"
      borderBottomColor="gray.800"
    >
      <Image src={logoIgniteLabIcon} alt="Logo Ignite Lab" />
    </Flex>
  );
};
