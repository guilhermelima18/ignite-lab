import { gql, useQuery } from "@apollo/client";
import { Box, Flex, Heading } from "@chakra-ui/react";
import { CardLessons } from "../Cards/CardLessons";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      title
      lessonType
      availableAt
    }
  }
`;

interface GetLessonsResponse {
  lessons: {
    id: string;
    slug: string;
    title: string;
    lessonType: "live" | "class";
    availableAt: Date;
  }[];
}

type SidebarProps = {
  isCurrentSlug?: string;
  isDrawer?: boolean;
};

export const Sidebar = ({ isCurrentSlug, isDrawer }: SidebarProps) => {
  const { data } = useQuery<GetLessonsResponse>(GET_LESSONS_QUERY);

  return (
    <Flex
      as="aside"
      bg="gray.700"
      w={isDrawer ? "100%" : "30%"}
      maxW="400px"
      maxH="700px"
      flexDir="column"
      px="3"
      overflowY="auto"
      borderLeft="1px solid"
      borderLeftColor="gray.800"
      css={{
        "&::-webkit-scrollbar": {
          width: "5px",
        },
        "&::-webkit-scrollbar-track": {
          width: "5px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(200, 200, 200, 0.2)",
          borderRadius: "24px",
        },
      }}
    >
      <Box
        w="100%"
        h="70px"
        py="5"
        display="flex"
        borderBottom="1px solid"
        borderColor="gray.800"
      >
        <Heading w="100%" fontSize="1.5rem" color="white">
          Cronograma de aulas
        </Heading>
      </Box>
      {data?.lessons.map((lesson) => (
        <CardLessons
          key={lesson.id}
          lessonType={lesson.lessonType}
          title={lesson.title}
          slug={lesson.slug}
          availableAt={new Date(lesson.availableAt)}
          isCurrentSlug={isCurrentSlug}
        />
      ))}
    </Flex>
  );
};
