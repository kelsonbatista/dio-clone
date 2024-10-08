import * as yup from "yup";

const loginSchema = yup
  .object()
  .shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(5, "A senha deve ter pelo menos 5 caracteres")
      .required("Campo obrigatório"),
  })
  .required();

export default loginSchema;
