import * as yup from "yup";

export const subscribeFormValidation = yup.object({
  name: yup.string().required("O campo nome é obrigatório"),
  email: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O campo e-mail é obrigatório"),
});
