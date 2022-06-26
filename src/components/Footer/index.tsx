import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import logoRocketseatIcon from "../../assets/logo-rocketseat.png";

export const Footer = () => {
  const [isLessThan700] = useMediaQuery("(max-width: 700px)");

  return (
    <Flex
      as="footer"
      bg="gray.900"
      w="100%"
      flexDir={isLessThan700 ? "column" : "row"}
      alignItems="center"
      justifyContent="space-between"
      p="5"
      borderTop="1px solid"
      borderTopColor="gray.800"
    >
      <Box
        display="flex"
        flexDir={isLessThan700 ? "column" : "row"}
        alignItems="center"
        gap="20px"
      >
        <Image src={logoRocketseatIcon} alt="Logo Rocketseat" />
        <Text fontSize="0.9rem" color="gray.500">
          Rocketseat - Todos os direitos reservados
        </Text>
      </Box>
      <Box display="flex" alignItems="center">
        <Text fontSize="0.9rem" color="gray.500">
          Políticas de Privacidade
        </Text>
      </Box>
    </Flex>
  );
};
