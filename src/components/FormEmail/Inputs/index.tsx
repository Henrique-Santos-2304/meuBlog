/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
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
const Inputs = ({ txt, type, registerer, err }: IconsTypesProps) => {
  return (
    <FormControl>
      <FormLabel fontSize="3xl" htmlFor={type} color="yellow.600" ml="0.5rem">
        {txt}
      </FormLabel>
      <Input
        variant="flushed"
        p="1rem"
        textAlign="center"
        type={type}
        placeholder={`Digite seu ${txt}`}
        _focus={{ borderColor: "orange" }}
        {...registerer(type, {
          required: `Campo  Obrigatório`,
        })}
        fontSize="3xl"
        borderRadius="1rem"
        color="gray.100"
        id={type}
        h="4rem"
      />
      {err[type] && <AlertIcons message={err[type].message} />}
    </FormControl>
  );
};

export default Inputs;
