/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from "./styles";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import ContentInput from "../ContentInput";
import { contact, formDatas } from "graphql/typesQueries/types";

type propsContact = {
  dataContact: contact;
  formEmailData: formDatas;
};

const FormEmail = ({ dataContact, formEmailData }: propsContact) => {
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
        formEmailData.services,
        formEmailData.form,
        formRef.current!,
        formEmailData.user
      )
      .then(
        function () {
          setMsgForm(dataContact.msgSendEmail.msgSucess);
        },
        function () {
          setMsgForm(dataContact.msgSendEmail.msgError);
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
        <S.ModalForm aria-label={dataContact.msgSendEmail.ariaLabel}>
          {msgForm}
        </S.ModalForm>
      )}
      <S.Form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        {/* Input de Nome */}
        <ContentInput
          error={errors.name && errors.name.message}
          typeLabel={dataContact.Input.name}
          txtLabel={dataContact.Input.textLabel}
        >
          <S.Inputs
            id={dataContact.Input.name}
            type={dataContact.Input.type}
            placeholder={dataContact.Input.placeholder}
            {...register(dataContact.Input.name, {
              required: dataContact.Input.msgError,
            })}
          />
        </ContentInput>
        {/* Input de Email */}
        <ContentInput
          error={errors.email && errors.email.message}
          typeLabel={dataContact.inputEmail.name}
          txtLabel={dataContact.inputEmail.textLabel}
        >
          <S.Inputs
            id={dataContact.inputEmail.name}
            type={dataContact.inputEmail.type}
            placeholder={dataContact.inputEmail.placeholder}
            {...register(dataContact.inputEmail.name, {
              required: dataContact.inputEmail.msgError,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: dataContact.msgSendEmail.msgFormatEmail,
              },
            })}
          />
        </ContentInput>

        {/* Input de Mensagem  */}
        <ContentInput
          error={errors.message && errors.message.message}
          typeLabel={dataContact.inputMessage.name}
          txtLabel={dataContact.inputMessage.textLabel}
        >
          <S.TextAreas
            id={dataContact.inputMessage.name}
            placeholder={dataContact.inputMessage.placeholder}
            {...register(dataContact.inputMessage.name, {
              required: dataContact.inputMessage.msgError,
            })}
          />
        </ContentInput>

        <S.Button
          type={dataContact.buttonSend.type}
          value={dataContact.buttonSend.text}
        />
      </S.Form>
    </S.Wrapper>
  );
};

export default FormEmail;
