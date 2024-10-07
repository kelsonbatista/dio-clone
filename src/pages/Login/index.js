import React from "react";
import { MdEmail, MdLock } from "react-icons/md";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Column, ForgotText, LoginContainer, RegisterText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";

function Login() {
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
            <form>
              <Input placeholder="Email" leftIcon={<MdEmail />} />
              <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
              <Button title="Entrar" variant="primary" onClick={() => {}} />
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
