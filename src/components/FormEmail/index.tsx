/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from "./styles";
import { useState } from "react";
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
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: "",
    values: false,
  });
  const toast = useToast();

  function sendEmail(data: dataMesssage) {
    const dataEmail = { ...data, values: true };
    setMsg(dataEmail);
  }
  const onSubmit = (data: dataMesssage) => {
    toast({
      title: "Submitted!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    sendEmail(data);
  };
  return (
    <Flex direction="column" align="center" justify="center">
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={12} w="100%">
          {/* Campo de Nome */}
          <Inputs
            txt="Nome"
            type="name"
            registerer={register}
            err={formState.errors}
          />

          <Inputs
            txt="Email"
            type="email"
            registerer={register}
            err={formState.errors}
          />
          {/* Campo de Mensagem  */}
          <TextAreas
            txt="Mensagem"
            type="message"
            registerer={register}
            err={formState.errors}
          />
          {/* <FormControl>
            <FormLabel
              htmlFor="message"
              fontSize="3xl"
              color="yellow.600"
              ml="0.5rem"
            >
              Mensagem
            </FormLabel>
            <Textarea
              _focus={{ borderColor: "orange" }}
              placeholder="Mensagem"
              {...register("message", {
                required: "Uma mensagem é obrigatória",
              })}
              fontSize="3xl"
              borderRadius="1.5rem"
              color="gray.100"
              id="message"
            />
            {errors.message && <AlertIcons message={errors.message.message} />}
          </FormControl> */}
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

      {msg.values && (
        <ul>
          <li>Nome: {msg.name!}</li>
          <li>Email: {msg.email!}</li>
          <li>Mensagem: {msg.message!}</li>{" "}
        </ul>
      )}
    </Flex>
  );
};

export default FormEmail;
// pattern: {
//   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//   message: "invalid email address",
// },
