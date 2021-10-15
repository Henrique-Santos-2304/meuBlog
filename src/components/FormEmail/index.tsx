/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from "./styles";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, VStack, useToast } from "@chakra-ui/react";
import Inputs from "./Inputs";
import TextAreas from "./TextAreas";

const FormEmail = () => {
  const toast = useToast();
  const { handleSubmit, register, formState } = useForm();
  const formRef = useRef<HTMLFormElement>(null);

  const sendData = () => {
    emailjs
      .sendForm(
        "service_ijjwv7k",
        "CONTACT_FORM",
        formRef.current!,
        "user_mB0pVxnJ1ebEVquIzWsUn"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "Enviado!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Erro ao enviar!",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      );
  };
  const onSubmit = () => {
    sendData();
  };
  return (
    <Flex direction="column" align="center" justify="center">
      <S.Form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
        <VStack spacing={12} w="100%">
          {/* Campo de Nome */}
          <Inputs
            txt="Nome"
            typeInput="name"
            registerer={register}
            err={formState.errors}
          />

          <Inputs
            txt="Email"
            typeInput="email"
            registerer={register}
            err={formState.errors}
          />
          {/* Campo de Mensagem  */}
          <TextAreas
            txt="Mensagem"
            typeInput="message"
            registerer={register}
            err={formState.errors}
          />

          <Button
            type="submit"
            rightIcon={<ArrowForwardIcon />}
            colorScheme="yellow"
            borderRadius="1rem"
            variant="outline"
            fontSize="2xl"
            size="lg"
            w="13rem"
            h="4.8rem"
            mt={4}
            _hover={{ filter: "brightness(0.8)" }}
            isLoading={formState.isSubmitting}
          >
            Enviar
          </Button>
        </VStack>
      </S.Form>
    </Flex>
  );
};

export default FormEmail;
