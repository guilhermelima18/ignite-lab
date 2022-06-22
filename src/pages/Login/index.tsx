import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Layout } from "../../components/Layout";
import { RegistrationForm } from "../../components/RegistrationForm";
import igniteLabIcon from "../../assets/logo-ignitelab.png";
import blurImage from "../../assets/blur.svg";
import reactIcon from "../../assets/reactjs.png";
import imageBackground from "../../assets/image-background.svg";

export default function Login() {
  return (
    <Flex
      bgImage={`url(${blurImage})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      minH="100vh"
    >
      <Flex
        bgImage={`url(${reactIcon})`}
        bgRepeat="no-repeat"
        bgPosition="top center"
        bgSize="600px"
        w="100%"
        h="100%"
        mt="5"
      >
        <Layout>
          <Box
            w="100%"
            minH="300px"
            display="flex"
            justifyContent="space-between"
            mt="10"
          >
            <Flex w="50%" flexDir="column" justifyContent="center">
              <Box w="100%" display="flex" flexDir="column">
                <Image w="200px" src={igniteLabIcon} alt="Logo Ignite Lab" />
              </Box>
              <Box w="100%" display="flex" flexDir="column" mt="5">
                <Text color="white" fontSize="2.1rem" fontWeight="normal">
                  Construa uma{" "}
                  <Text as="span" color="blue.300" fontWeight="bold">
                    aplicação completa
                  </Text>
                  ,<br /> do zero, com{" "}
                  <Text as="span" color="blue.300" fontWeight="bold">
                    React JS
                  </Text>
                </Text>
              </Box>
              <Box w="100%" display="flex" flexDir="column" mt="5">
                <Text fontSize="0.9rem" color="gray.400">
                  Em apenas uma semana você vai dominar na prática uma das
                  tecnologias mais
                  <br />
                  utilizadas e com alta demanda para acessar as melhores
                  oportunidades do mercado.
                </Text>
              </Box>
            </Flex>
            <Flex w="50%" alignItems="center" justifyContent="flex-end">
              <RegistrationForm />
            </Flex>
          </Box>

          <Box w="100%">
            <Image w="100%" src={imageBackground} alt="Imagem de Fundo" />
          </Box>
        </Layout>
      </Flex>
    </Flex>
  );
}
