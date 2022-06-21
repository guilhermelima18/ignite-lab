import { Box, Flex, Heading } from "@chakra-ui/react";
import { Button } from "../Button";
import { Input } from "../Input";

export const RegistrationForm = () => {
  return (
    <Flex
      bg="#121214"
      w="100%"
      maxW="350px"
      h="250px"
      flexDir="column"
      p="5"
      gap="20px"
      borderRadius="md"
      border="2px solid"
      borderColor="whiteAlpha.300"
    >
      <Heading fontSize="1.3rem" color="white">
        Inscreva-se gratuitamente
      </Heading>
      <Box display="flex" flexDir="column" gap="10px">
        <Input
          bg="black"
          type="text"
          name="name"
          color="white"
          placeholder="Seu nome completo"
          _placeholder={{ color: "whiteAlpha.500" }}
          autoFocus
        />
        <Input
          bg="black"
          type="email"
          name="email"
          color="white"
          placeholder="Digite seu e-mail"
          _placeholder={{ color: "whiteAlpha.500" }}
        />
      </Box>
      <Box w="100%">
        <Button w="100%" colorScheme="green" fontSize="0.9rem">
          GARANTIR MINHA VAGA
        </Button>
      </Box>
    </Flex>
  );
};
