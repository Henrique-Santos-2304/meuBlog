import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

type messageType = { message: string };
const AlertIcons = ({ message }: messageType) => {
  return (
    <Alert
      status="error"
      role="alert"
      colorScheme="purple"
      color="blackAlpha.900"
      borderRadius="1rem"
      mt="1rem"
    >
      <AlertIcon color="red.900" />
      {message}
    </Alert>
  );
};

export default AlertIcons;
