import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { DiscordLogo, Lightning, FileArrowDown, Image } from "phosphor-react";
import { Avatar } from "../../components/Avatar";
import { Button } from "../../components/Button";
import { CardInfo } from "../../components/Cards/CardInfo";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { Sidebar } from "../../components/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <Layout>
        <Flex as="main" bg="#09090A" w="100%" justifyContent="space-between">
          <Box as="section" w="70%" display="flex" flexDir="column">
            <Box bg="gray.800" w="100%" h="500px">
              Teste
            </Box>
            <Box
              w="100%"
              display="flex"
              justifyContent="space-between"
              mt="5"
              px="7"
            >
              <Flex w="70%" flexDir="column" gap="10px">
                <Heading fontSize="1.5rem" color="white">
                  Aula 01 - Criando o projeto e realizando o setup inicial
                </Heading>
                <Text fontSize="0.8rem" color="white" lineHeight="25px">
                  Nessa aula vamos dar início ao projeto criando a estrutura
                  base da aplicação utilizando ReactJS, Vite e TailwindCSS.
                  Vamos também realizar o setup do nosso projeto no GraphCMS
                  criando as entidades da aplicação e integrando a API GraphQL
                  gerada pela plataforma no nosso front-end utilizando Apollo
                  Client.
                </Text>
              </Flex>
              <Flex flexDir="column" gap="10px">
                <Button
                  colorScheme="green"
                  h="50px"
                  fontSize="0.9rem"
                  display="flex"
                  alignItems="center"
                  gap="10px"
                >
                  <DiscordLogo size={20} />
                  COMUNIDADE NO DISCORD
                </Button>
                <Button
                  colorScheme="linkedin"
                  h="50px"
                  fontSize="0.9rem"
                  display="flex"
                  alignItems="center"
                  gap="10px"
                  color="white"
                >
                  <Lightning size={20} />
                  ACESSE O DESAFIO
                </Button>
              </Flex>
            </Box>
            <Avatar />
            <Box
              w="100%"
              display="flex"
              alignItems="center"
              gap="10px"
              mt="5"
              px="7"
            >
              <CardInfo
                title="Material complementar"
                info="Acesse o material complementar para acelerar o seu desenvolvimento"
                icon={<FileArrowDown size={30} color="white" />}
              />
              <CardInfo
                title="Wallpapers exclusivos"
                info="Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina"
                icon={<Image size={30} color="white" />}
              />
            </Box>
          </Box>
          <Sidebar />
        </Flex>
      </Layout>
    </>
  );
}
