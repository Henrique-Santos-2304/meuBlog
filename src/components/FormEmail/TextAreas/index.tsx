/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import AlertIcons from "../AlertIcons";

type IconsTypesProps = {
  txt: string;
  type: string;
  registerer: UseFormRegister<FieldValues>;
  err: {
    [x: string]: any;
  };
};
const TextAreas = ({ txt, type, registerer, err }: IconsTypesProps) => {
  return (
    <FormControl>
      <FormLabel
        fontSize="3xl"
        htmlFor={type}
        color="yellow.600"
        m="2rem 0 1rem 0.5rem"
      >
        {txt}
      </FormLabel>
      <Textarea
        {...registerer(type, {
          required: `Campo  Obrigatório`,
        })}
        placeholder={`Digite sua Mensagem`}
        type={type}
        h="20rem"
        p="1.3rem"
        variant="filed"
        bg="blackAlpha.300"
        color="gray.100"
        textAlign="center"
        fontSize="3xl"
        borderRadius="1.5rem"
        transition="all .3s linear"
        _focus={{ border: "0.1rem solid orange" }}
        _hover={{ border: "0.1rem solid orange" }}
      />
      {err[type] && <AlertIcons message={err[type].message} />}
    </FormControl>
  );
};

export default TextAreas;
