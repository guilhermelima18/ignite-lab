import { useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  ArrowFatRight,
  FileArrowDown,
  Image,
  List,
  RocketLaunch,
} from "phosphor-react";
import { gql, useQuery } from "@apollo/client";
import { Avatar } from "../../components/Avatar";
import { CardInfo } from "../../components/Cards/CardInfo";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { Sidebar } from "../../components/Sidebar";
import { BoxVideo } from "../../components/BoxVideo";
import { VideoInfo } from "../../components/VideoInfo";
import { Button } from "../../components/Button";
import { DrawerSidebar } from "../../components/DrawerSidebar";

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
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isLessThan1000] = useMediaQuery("(max-width: 1000px)");
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
          {slug ? (
            <Box
              as="section"
              w={isLessThan1000 ? "100%" : "70%"}
              display="flex"
              flexDir="column"
            >
              {isLessThan1000 && (
                <Button bg="purple.500" w="50px" onClick={onOpen} my="5">
                  <List size={24} weight="fill" color="white" />
                </Button>
              )}
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
                flexDir={isLessThan1000 ? "column" : "row"}
                alignItems={isLessThan1000 ? "flex-start" : "center"}
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
          ) : (
            <Box
              as="section"
              w={isLessThan1000 ? "100%" : "70%"}
              minH={isLessThan1000 ? "70vh" : ""}
              display="flex"
              flexDir="column"
              /* alignItems="center" */
              justifyContent="center"
              position="relative"
            >
              {isLessThan1000 && (
                <Button
                  bg="purple.500"
                  size="sm"
                  onClick={onOpen}
                  mt="5"
                  position="absolute"
                  top="0"
                  right="0"
                >
                  <List size={24} weight="fill" color="white" />
                </Button>
              )}
              <RocketLaunch color="#805AD5" size={50} weight="fill" />
              <Heading
                color="white"
                fontSize={["1.5rem", "2.3rem", "3rem"]}
                mt="10"
              >
                Acelere cada etapa da sua
                <br />
                carreira em programação
              </Heading>
              <Text
                bg="purple.500"
                w="280px"
                h="50px"
                color="white"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="md"
                gap="10px"
                mt="10"
                transition="500ms"
                _hover={{
                  backgroundColor: "purple.700",
                  transform: "scale(1.1)",
                }}
              >
                Selecione uma aula ao lado
                <ArrowFatRight size={25} weight="fill" />
              </Text>
            </Box>
          )}
          {!isLessThan1000 && <Sidebar isCurrentSlug={data?.lesson?.slug} />}
        </Flex>
      </Layout>
      {isOpen && (
        <DrawerSidebar
          isOpen={isOpen}
          onClose={onClose}
          isCurrentSlug={data?.lesson?.slug}
        />
      )}
    </>
  );
}
