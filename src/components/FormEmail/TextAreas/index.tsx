/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import AlertIcons from "../AlertIcons";

type IconsTypesProps = {
  txt: string;
  typeInput: string;
  registerer: UseFormRegister<FieldValues>;
  err: {
    [x: string]: any;
  };
};
const TextAreas = ({ txt, typeInput, registerer, err }: IconsTypesProps) => {
  return (
    <FormControl>
      <FormLabel fontSize="2xl" htmlFor={typeInput} color="yellow.600">
        {txt}
      </FormLabel>
      <Textarea
        {...registerer(typeInput, {
          required: `Campo  Obrigatório`,
        })}
        placeholder={`Digite sua Mensagem`}
        name={typeInput}
        aria-label="Campo de Digitação de Mensagem"
        type={typeInput}
        h="17rem"
        p="1.3rem"
        variant="filed"
        bg="blackAlpha.300"
        color="gray.100"
        textAlign="center"
        fontSize="2xl"
        borderRadius="1.5rem"
        transition="all .3s linear"
        _focus={{ border: "0.1rem solid orange" }}
        _hover={{ border: "0.1rem solid orange" }}
      />
      {err[typeInput] && <AlertIcons message={err[typeInput].message} />}
    </FormControl>
  );
};

export default TextAreas;
