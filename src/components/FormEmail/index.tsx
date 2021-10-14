/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex, VStack, useToast } from "@chakra-ui/react";
import Inputs from "./Inputs";
import TextAreas from "./TextAreas";

type dataMesssage = {
  name: string;
  email: string;
  message: string;
};
const FormEmail = () => {
  const { handleSubmit, register, formState } = useForm();

  const toast = useToast();

  const onSubmit = (data: dataMesssage) => {
    toast({
      title: "Enviado!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    console.log(data);
  };
  return (
    <Flex direction="column" align="center" justify="center">
      <S.Form onSubmit={handleSubmit(onSubmit)}>
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
