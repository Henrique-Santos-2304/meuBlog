/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import ContentInput from "../ContentInput";

const FormEmail = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const formRef = useRef<HTMLFormElement>(null);
  const [msgForm, setMsgForm] = useState("");

  const onSubmit = async () => {
    await emailjs
      .sendForm(
        "service_ijjwv7k",
        "CONTACT_FORM",
        formRef.current!,
        "user_mB0pVxnJ1ebEVquIzWsUn"
      )
      .then(
        function () {
          setMsgForm("Enviado com sucesso");
        },
        function () {
          setMsgForm("Erro! Verifique seus dados");
        }
      );
  };
  useEffect(() => {
    setTimeout(() => {
      setMsgForm("");
    }, 10000);
  }, [msgForm]);

  return (
    <S.Wrapper>
      {msgForm && (
        <S.ModalForm aria-label="alerta de sucesso ou erro para envio de email">
          {msgForm}
        </S.ModalForm>
      )}
      <S.Form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        {/* Input de Nome */}
        <ContentInput
          error={errors.name && errors.name.message}
          typeLabel="name"
          txtLabel="Nome"
        >
          <S.Inputs
            id="name"
            type="text"
            placeholder="Digite seu nome"
            {...register("name", { required: "Digite seu nome" })}
          />
        </ContentInput>
        {/* Input de Email */}
        <ContentInput
          error={errors.email && errors.email.message}
          typeLabel="email"
          txtLabel="Email"
        >
          <S.Inputs
            id="email"
            type="email"
            placeholder="Digite seu email"
            {...register("email", {
              required: "Digite um email",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Formato de email inválido",
              },
            })}
          />
        </ContentInput>

        {/* Input de Mensagem  */}
        <ContentInput
          error={errors.message && errors.message.message}
          typeLabel="message"
          txtLabel="Mensagem"
        >
          <S.TextAreas
            id="message"
            placeholder="Digite sua mensagem"
            {...register("message", { required: "Digite uma mensagem" })}
          />
        </ContentInput>

        <S.Button type="submit">Enviar</S.Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default FormEmail;
