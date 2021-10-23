import { Button, ButtonGroup, Flex, Link, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

type buttonsProps = {
  onOpen: () => void;
  buttons: { url: string; label: string }[];
};

const Buttons = ({ onOpen, buttons }: buttonsProps) => (
  <ButtonGroup spacing={["20px", "25px", "40px", "80px"]}>
    <Button
      colorScheme="green"
      borderRadius="0.7rem"
      textAlign="center"
      size="lg"
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
        size="lg"
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

export default Buttons;