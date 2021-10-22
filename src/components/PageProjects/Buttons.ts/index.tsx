import { Button, ButtonGroup, Flex, Link, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { buttonsProps } from "./ButtonsTypes";

const ButtonsSlides = ({ onOpen, buttons }: buttonsProps) => (
  <ButtonGroup spacing={["20px", "25px", "40px", "80px"]}>
    <Button
      colorScheme="green"
      borderRadius="0.7rem"
      textAlign="center"
      p={["1.2rem 2rem", "1.6rem 2.5rem"]}
      fontSize={["1.2rem", null, null, "1.8rem"]}
      _hover={{ border: "0.1rem solid white" }}
      onClick={onOpen}
    >
      {buttons[0].label}
    </Button>
    <Link href={buttons[1].url} isExternal>
      <Button
        bg="blackAlpha.600"
        borderRadius="0.7rem"
        color="gray.100"
        p={["1rem 2rem", "1.6rem 2.5rem"]}
        _hover={{ border: "0.1rem solid white" }}
        fontSize={["1.2rem", null, null, "1.8rem"]}
      >
        <Flex justify="center" align="center">
          <FaGithub />
          <Text ml="0.9rem">{buttons[1].label}</Text>
        </Flex>
      </Button>
    </Link>
  </ButtonGroup>
);

export default ButtonsSlides;
