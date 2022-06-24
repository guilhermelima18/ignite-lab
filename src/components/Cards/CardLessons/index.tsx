import { Link } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

type CardLessonsProps = {
  availableAt: Date;
  lessonType: "live" | "class";
  slug: string;
  title: string;
  isCurrentSlug?: string;
};

export const CardLessons = ({
  lessonType,
  title,
  availableAt,
  slug,
  isCurrentSlug,
}: CardLessonsProps) => {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isCurrentLesson = isCurrentSlug === slug;

  return (
    <Link to={`/event/lesson/${slug}`}>
      <Box
        w="100%"
        display="flex"
        flexDir="column"
        my="5"
        cursor={isLessonAvailable ? "pointer" : "not-allowed"}
      >
        <Text color="gray.500" fontSize="0.9rem" mb="2">
          {availableDateFormatted}
        </Text>
        <Box
          bg={isCurrentLesson ? "green.500" : ""}
          w="100%"
          h="95px"
          display="flex"
          flexDir="column"
          justifyContent="space-between"
          border="1px solid"
          borderColor="gray.800"
          p="3"
          borderRadius="md"
          position="relative"
          _hover={{ border: "1px solid", borderColor: "green.500" }}
        >
          <Text
            fontSize="0.7rem"
            color={
              isCurrentLesson
                ? "white"
                : !isCurrentLesson && lessonType === "live"
                ? "green.500"
                : "white"
            }
            position="absolute"
            top="10px"
            right="10px"
            border="1px solid"
            borderColor={isCurrentLesson ? "white" : "green.500"}
            borderRadius="md"
            px="2"
            py="1"
          >
            {lessonType === "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </Text>
          <Text
            color={
              isCurrentLesson
                ? "white"
                : !isCurrentLesson && isLessonAvailable
                ? "cyan.400"
                : "orange.400"
            }
            fontSize="0.8rem"
            display="flex"
            alignItems="center"
            gap="5px"
          >
            {isLessonAvailable ? (
              <>
                <CheckCircle size={20} />
                Conteúdo liberado
              </>
            ) : (
              <>
                <Lock size={20} />
                Em breve
              </>
            )}
          </Text>
          <Text color="gray.200" fontSize="0.8rem">
            {title}
          </Text>
        </Box>
      </Box>
    </Link>
  );
};
