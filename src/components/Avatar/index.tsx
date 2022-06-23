import { Box, Flex, Image, Text } from "@chakra-ui/react";

type AvatarProps = {
  imageUrl: string;
  teacherName: string;
  teacherBio: string;
};

export const Avatar = ({ imageUrl, teacherName, teacherBio }: AvatarProps) => {
  return (
    <Flex w="350px" mt="5" mb="10" gap="20px" px="5">
      <Image w="65px" borderRadius="50%" src={imageUrl} alt={teacherName} />
      <Box display="flex" flexDir="column" justifyContent="center">
        <strong style={{ color: "white" }}>{teacherName}</strong>
        <Text color="gray.500" fontSize="0.8rem">
          {teacherBio}
        </Text>
      </Box>
    </Flex>
  );
};
