/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
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
const Inputs = ({ txt, typeInput, registerer, err }: IconsTypesProps) => {
  const emailPattern =
    typeInput === "email"
      ? {
          required: "Campo Obrigatório",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address",
          },
        }
      : { required: "Campo Obrigatório" };
  return (
    <FormControl>
      <FormLabel
        fontSize="2xl"
        htmlFor={typeInput}
        color="yellow.600"
        ml="0.5rem"
      >
        {txt}
      </FormLabel>
      <Input
        isRequired={false}
        variant="flushed"
        textAlign="center"
        type="text"
        placeholder={`Digite seu ${txt}`}
        _focus={{ borderColor: "orange" }}
        {...registerer(typeInput, emailPattern)}
        fontSize="2xl"
        borderRadius="1rem"
        color="gray.100"
        id={typeInput}
        h="2.6rem"
      />
      {err[typeInput] && <AlertIcons message={err[typeInput].message} />}
    </FormControl>
  );
};

export default Inputs;
