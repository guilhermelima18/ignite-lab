import { Box, Flex, Heading } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import { Button } from "../Button";
import { Input } from "../Input";

export const RegistrationForm = () => {
  const {
    register,
    formState: { isSubmitting, errors },
  } = useFormContext();

  return (
    <Flex
      bg="#121214"
      w="100%"
      h="300px"
      flexDir="column"
      justifyContent="center"
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
          color="white"
          size="lg"
          placeholder="Seu nome completo"
          _placeholder={{ color: "whiteAlpha.500" }}
          {...register("name")}
          error={errors?.name?.message}
          autoFocus
        />
        <Input
          bg="black"
          type="email"
          color="white"
          size="lg"
          placeholder="Digite seu e-mail"
          _placeholder={{ color: "whiteAlpha.500" }}
          {...register("email")}
          error={errors?.email?.message}
        />
      </Box>
      <Box w="100%">
        <Button
          type="submit"
          w="100%"
          colorScheme="green"
          size="lg"
          fontSize="0.9rem"
          textTransform="uppercase"
          isDisabled={isSubmitting}
          isLoading={isSubmitting}
        >
          Garantir minha vaga
        </Button>
      </Box>
    </Flex>
  );
};
