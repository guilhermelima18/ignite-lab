import { Box, Flex, Text } from "@chakra-ui/react";
import { CaretRight } from "phosphor-react";
import { ReactNode } from "react";

type CardInfoProps = {
  title: string;
  info: string;
  icon: ReactNode;
};

export const CardInfo = ({ title, info, icon }: CardInfoProps) => {
  return (
    <Flex
      bg="#121214"
      w="100%"
      maxW="500px"
      h="120px"
      gap="20px"
      cursor="pointer"
      borderRadius="md"
      transition="500ms"
      _hover={{ backgroundColor: "#202024" }}
    >
      <Box
        bg="green.500"
        w="70px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderTopLeftRadius="md"
        borderBottomLeftRadius="md"
      >
        {icon}
      </Box>
      <Box
        flex="1"
        display="flex"
        flexDir="column"
        justifyContent="center"
        position="relative"
      >
        <Text color="white" fontSize="1.3rem" mb="3">
          {title}
        </Text>
        <small
          style={{ color: "rgba(200, 200, 200, 0.7)", fontSize: "0.7rem" }}
        >
          {info}
        </small>
      </Box>
      <Box w="50px" display="flex" alignItems="center" justifyContent="center">
        <CaretRight size={20} color="#81D8F7" />
      </Box>
    </Flex>
  );
};
