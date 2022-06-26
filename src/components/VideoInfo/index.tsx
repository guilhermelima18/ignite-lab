import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { DiscordLogo, Lightning } from "phosphor-react";
import { Button } from "../Button";

type VideoInfoProps = {
  title: string;
  description: string;
};

export const VideoInfo = ({ title, description }: VideoInfoProps) => {
  const [isLessThan1000] = useMediaQuery("(max-width: 1000px)");

  return (
    <Box
      w="100%"
      display="flex"
      flexDir={isLessThan1000 ? "column" : "row"}
      justifyContent="space-between"
      mt="5"
      px="5"
      mb={isLessThan1000 ? "5" : "0"}
    >
      <Flex
        w={isLessThan1000 ? "100%" : "70%"}
        flexDir="column"
        gap="10px"
        mb={isLessThan1000 ? "5" : "0"}
      >
        <Heading fontSize="1.5rem" color="white">
          {title}
        </Heading>
        <Text fontSize="0.8rem" color="white" lineHeight="25px">
          {description}
        </Text>
      </Flex>
      <Flex flexDir="column" gap="10px">
        <Link href="/" isExternal _hover={{ textDecoration: "none" }}>
          <Button
            colorScheme="green"
            w={isLessThan1000 ? "100%" : "220px"}
            h="50px"
            fontSize="0.8rem"
            display="flex"
            alignItems="center"
            gap="10px"
          >
            <DiscordLogo size={20} />
            COMUNIDADE NO DISCORD
          </Button>
        </Link>
        <Link href="/" isExternal _hover={{ textDecoration: "none" }}>
          <Button
            colorScheme="linkedin"
            w={isLessThan1000 ? "100%" : "220px"}
            h="50px"
            fontSize="0.8rem"
            display="flex"
            alignItems="center"
            gap="10px"
            color="white"
          >
            <Lightning size={20} />
            ACESSE O DESAFIO
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};
