import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const Avatar = () => {
  return (
    <Flex w="350px" mt="5" mb="10" gap="20px" px="7">
      <Image
        w="65px"
        borderRadius="50%"
        src="https://github.com/guilhermelima18.png"
        alt="Avatar"
      />
      <Box display="flex" flexDir="column" justifyContent="center">
        <strong style={{ color: "white" }}>Diego Fernandes</strong>
        <Text color="gray.500" fontSize="0.8rem">
          Co-fundador e CTO na Rocketseat
        </Text>
      </Box>
    </Flex>
  );
};
