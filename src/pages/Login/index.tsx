import { useNavigate } from "react-router-dom";
import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { gql, useMutation } from "@apollo/client";
import { Layout } from "../../components/Layout";
import { RegistrationForm } from "../../components/RegistrationForm";
import { subscribeFormValidation } from "../../validations/SubscribeForm";
import { FormSubscribeProps } from "../../types/SubscribeForm";
import igniteLabIcon from "../../assets/logo-ignitelab.png";
import blurImage from "../../assets/blur.svg";
import reactIcon from "../../assets/reactjs.png";
import imageBackground from "../../assets/image-background.svg";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: { name: $name, email: $email }) {
      id
    }
  }
`;

export default function Login() {
  const [isLessThan790] = useMediaQuery("(max-width: 790px)");
  const navigate = useNavigate();
  const [createSubscriber] = useMutation(CREATE_SUBSCRIBER_MUTATION);
  const methods = useForm<FormSubscribeProps>({
    resolver: yupResolver(subscribeFormValidation),
  });

  const handleSubscribeFormSubmit: SubmitHandler<FormSubscribeProps> = async (
    data: FormSubscribeProps
  ) => {
    await createSubscriber({
      variables: {
        name: data.name,
        email: data.email,
      },
    });

    methods.reset();
    navigate("/event");
  };

  return (
    <Flex
      bgImage={`url(${blurImage})`}
      bgRepeat="no-repeat"
      bgSize="cover"
      w="100%"
      minH="100vh"
    >
      <Flex
        bgImage={`url(${reactIcon})`}
        bgRepeat="no-repeat"
        bgPosition="top center"
        bgSize="600px"
        w="100%"
        h="100%"
        mt="5"
      >
        <Layout>
          <Box
            w="100%"
            minH="300px"
            display="flex"
            flexDir={isLessThan790 ? "column" : "row"}
            justifyContent="space-between"
            mt="10"
          >
            <Flex
              w={isLessThan790 ? "100%" : "50%"}
              flexDir="column"
              justifyContent="center"
              mb={isLessThan790 ? "10" : "0"}
            >
              <Box w="100%" display="flex" flexDir="column">
                <Image w="200px" src={igniteLabIcon} alt="Logo Ignite Lab" />
              </Box>
              <Box w="100%" display="flex" flexDir="column" mt="5">
                <Text
                  color="white"
                  fontSize={["1.2rem", "1.8rem", "2.1rem"]}
                  fontWeight="normal"
                  lineHeight={["34px", "42px", "46px"]}
                >
                  Construa uma{" "}
                  <Text as="span" color="blue.300" fontWeight="bold">
                    aplica????o completa
                  </Text>
                  ,<br /> do zero, com{" "}
                  <Text as="span" color="blue.300" fontWeight="bold">
                    React JS
                  </Text>
                </Text>
              </Box>
              <Box w="100%" display="flex" flexDir="column" mt="5">
                <Text fontSize={["0.8rem", "0.9rem"]} color="gray.400">
                  Em apenas uma semana voc?? vai dominar na pr??tica uma das
                  tecnologias mais
                  <br />
                  utilizadas e com alta demanda para acessar as melhores
                  oportunidades do mercado.
                </Text>
              </Box>
            </Flex>
            <Flex
              w={isLessThan790 ? "100%" : "50%"}
              alignItems="center"
              justifyContent={isLessThan790 ? "center" : "flex-end"}
            >
              <FormProvider {...methods}>
                <form
                  onSubmit={methods.handleSubmit(handleSubscribeFormSubmit)}
                  style={{
                    width: "100%",
                    maxWidth: "350px",
                  }}
                >
                  <RegistrationForm />
                </form>
              </FormProvider>
            </Flex>
          </Box>

          <Box w="100%" display="flex" justifyContent="center">
            <Image w="100%" src={imageBackground} alt="Imagem de Fundo" />
          </Box>
        </Layout>
      </Flex>
    </Flex>
  );
}
