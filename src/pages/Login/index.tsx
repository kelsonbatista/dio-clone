import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdEmail, MdLock } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import loginSchema from "../../schemas/loginSchema";
import { api } from "../../services/api";
import { Column, ErrorText, ForgotText, LoginContainer, RegisterText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";
import { IFormData } from "./types";

function Login() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/feed");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (formData: IFormData) => {
    try {
      const response = await api.get(
        `/users?email=${formData.email}&password=${formData.password}`
      );

      if (response.data.length > 0) {
        handleClickLogin();
        setError('');
      } else {
        setError("Email ou senha inválidos");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <Header autenticado={false} />
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
            <div>{error && <ErrorText>{error}</ErrorText>}</div>
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
              <Button title="Entrar" $variant="primary" type="submit" />
            </form>
            <Row>
              <ForgotText>Esqueci minha senha</ForgotText>
              <Link to="/register">
                <RegisterText>Criar conta</RegisterText>
              </Link>
            </Row>
          </Wrapper>
        </Column>
      </LoginContainer>
    </>
  );
}

export default Login;
