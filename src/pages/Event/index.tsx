import { useParams } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { FileArrowDown, Image } from "phosphor-react";
import { gql, useQuery } from "@apollo/client";
import { Avatar } from "../../components/Avatar";
import { CardInfo } from "../../components/Cards/CardInfo";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { Sidebar } from "../../components/Sidebar";
import { BoxVideo } from "../../components/BoxVideo";
import { VideoInfo } from "../../components/VideoInfo";

interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    id: string;
    description: string;
    slug: string;
    videoId: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      id
      description
      slug
      videoId
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`;

export default function Event() {
  const { slug } = useParams();
  const { data, loading } = useQuery<GetLessonBySlugResponse>(
    GET_LESSON_BY_SLUG,
    {
      variables: {
        slug,
      },
    }
  );

  if (!data) return null;

  return (
    <>
      <Header />
      <Layout>
        <Flex
          as="main"
          bg="#09090A"
          w="100%"
          justifyContent={slug ? "space-between" : "flex-end"}
          mb="5"
        >
          {slug && (
            <Box as="section" w="70%" display="flex" flexDir="column">
              <BoxVideo videoId={data.lesson.videoId} />
              <VideoInfo
                title={data.lesson.title}
                description={data.lesson.description}
              />
              <Avatar
                imageUrl={data.lesson.teacher.avatarURL}
                teacherName={data.lesson.teacher.name}
                teacherBio={data.lesson.teacher.bio}
              />
              <Box
                w="100%"
                display="flex"
                alignItems="center"
                gap="10px"
                mt="5"
                px="5"
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
          )}
          <Sidebar isCurrentSlug={data?.lesson?.slug} />
        </Flex>
      </Layout>
    </>
  );
}
