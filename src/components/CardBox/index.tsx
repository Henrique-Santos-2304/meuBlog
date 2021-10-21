import {
  Box,
  Image,
  Text,
  Button,
  ButtonGroup,
  Flex,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import Headings from "components/Headings";
import { FaGithub } from "react-icons/fa";
import { ModalCardBox } from "./ModalCardBox";
import * as S from "./styles";

type buttonProps = {
  __typename?: any;
  url: string;
  label: string;
};
type imageProps = {
  url: string;
  title: string;
  subDescription: string;
  alt: string;
  buttons: buttonProps[];
};

const CardBox = ({ url, title, subDescription, alt, buttons }: imageProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      h={["40rem", "40rem", "42rem", "48rem"]}
      bg="blackAlpha.700"
      p={["2rem", "6rem"]}
      mx={["0.5rem", "1rem"]}
      position="relative"
      borderRadius="3.5rem"
    >
      <Flex
        position="absolute"
        top="-1.2rem"
        left="50%"
        transform="translate(-50%)"
        borderRadius="4rem"
      >
        <Headings
          msg={title}
          color="orange"
          margins="1rem auto"
          fontSize="2rem"
        />
      </Flex>
      <Image
        src={url}
        borderRadius="3rem"
        boxShadow="0 0 2rem white, 0 0 1rem orange"
        w="100%"
        h={["70%", "100%"]}
        mt={["4rem", "0"]}
        alt={alt}
      />
      <S.Wrapper>
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
      </S.Wrapper>
      <ModalCardBox
        isOpen={isOpen}
        onClose={onClose}
        subDescription={subDescription}
        title={title}
        url={url}
      />
    </Box>
  );
};

export default CardBox;
