import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { MdEmail, MdLock } from "react-icons/md";
import * as yup from "yup";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Column, ForgotText, LoginContainer, RegisterText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";

function Login() {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup.string().min(5,"A senha deve ter pelo menos 5 caracteres").required("Campo obrigatório"),
  }).required();
  
  const { control, handleSubmit, formState: { errors, isValid} } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => console.log(data);

  console.log(errors, isValid);
  //const navigate = useNavigate();

  /*const handleClickLogin = () => {
    navigate("/feed");
  };*/
  
  return (
    <>
      <Header />
      <LoginContainer>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Email"
                leftIcon={<MdEmail />}
                control={control}
                name="email"
                errorMessage={errors.email?.message}
                />
              <Input
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
                control={control}
                name="password"
                errorMessage={errors.password?.message}
              />
              <Button
                title="Entrar"
                $variant="primary"
                type="submit"
              />
            </form>
            <Row>
              <ForgotText>Esqueci minha senha</ForgotText>
              <RegisterText>Criar conta</RegisterText>
            </Row>
          </Wrapper>
        </Column>
      </LoginContainer>
    </>
  );
}

export default Login;
