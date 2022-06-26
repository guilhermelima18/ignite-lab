import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { CaretRight } from "phosphor-react";
import { ReactNode } from "react";

type CardInfoProps = {
  title: string;
  info: string;
  icon: ReactNode;
};

export const CardInfo = ({ title, info, icon }: CardInfoProps) => {
  const [isLessThan1100] = useMediaQuery("(max-width: 1100px)");
  const [isLessThan500] = useMediaQuery("(max-width: 500px)");

  return (
    <Flex
      bg="#121214"
      w="100%"
      maxW="500px"
      h={isLessThan1100 ? "auto" : "120px"}
      flexDir={isLessThan500 ? "column" : "row"}
      gap="20px"
      cursor="pointer"
      borderRadius="md"
      transition="500ms"
      _hover={{ backgroundColor: "#202024" }}
      p={isLessThan500 ? "5" : "0"}
    >
      <Box
        bg="green.500"
        w={isLessThan500 ? "100%" : "70px"}
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
        <Text color="white" fontSize={["1rem", "1.3rem"]} mb="3">
          {title}
        </Text>
        <small
          style={{ color: "rgba(200, 200, 200, 0.7)", fontSize: "0.7rem" }}
        >
          {info}
        </small>
      </Box>
      {!isLessThan500 && (
        <Box
          w="50px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CaretRight size={20} color="#81D8F7" />
        </Box>
      )}
    </Flex>
  );
};
