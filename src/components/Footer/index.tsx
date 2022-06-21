import { Box, Flex, Image, Text } from "@chakra-ui/react";
import logoRocketseatIcon from "../../assets/logo-rocketseat.png";

export const Footer = () => {
  return (
    <Flex
      bg="black"
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      p="5"
    >
      <Box display="flex" alignItems="center" gap="20px">
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
