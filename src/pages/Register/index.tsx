import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdEmail, MdLock, MdPerson } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Input from "../../components/Input";
import registerSchema from "../../schemas/registerSchema";
import { api } from "../../services/api";
import { Column, ErrorText, ForgotText, RegisterContainer, RegisterText, Row, SubTitleRegister, Title, TitleRegister, Wrapper } from "./styles";
import { IFormData } from "./types";

function Register() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/login");
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = async (formData: IFormData) => {
    try {
      const response = await api.get(
        `/users?email=${formData.email}`
      );

      if (response.data.length === 0) {
        await api.post("/users", formData);
        handleClickRegister();
        setError('');
      } else {
        setError("Esse usuário já existe. Faça login ou clique em 'esqueci minha senha'");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <Header />
      <RegisterContainer>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleRegister>Comece agora grátis</TitleRegister>
            <SubTitleRegister>
              Crie sua conta e make the change.
            </SubTitleRegister>
            <div>{error && <ErrorText>{error}</ErrorText>}</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                placeholder="Nome"
                leftIcon={<MdPerson />}
                control={control}
                name="name"
                errorMessage={errors.name?.message}
              />
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
                title="Criar minha conta"
                $variant="primary"
                type="submit"
              />
            </form>
            <Row>
              <SubTitleRegister>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </SubTitleRegister>
            </Row>
            <Row>
              <Link to="/login">
                <ForgotText>Já tenho conta</ForgotText>
              </Link>
              <Link to="/register">
                <RegisterText>Criar conta</RegisterText>
              </Link>
            </Row>
          </Wrapper>
        </Column>
      </RegisterContainer>
    </>
  );
}

export default Register;
