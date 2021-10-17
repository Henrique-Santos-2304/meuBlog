import { Box, Image, Text, Button, ButtonGroup } from "@chakra-ui/react";
import Headings from "components/Headings";
import { FaGithub } from "react-icons/fa";
import * as S from "./styles";

type imageProps = {
  url: string;
  title: string;
  subDescription: string;
};

const CardBox = ({ url, title, subDescription }: imageProps) => {
  return (
    <Box
      h="34rem"
      bg="blackAlpha.400"
      borderRadius="1rem"
      p={["2rem", "1rem"]}
      mx={["0.5rem", "1rem"]}
      position="relative"
    >
      <Image src={url} borderRadius="1rem" h="15rem" w="100%" />
      <Headings
        msg={title}
        color={"orange"}
        margins="1rem auto"
        padding="1rem"
        fontSize="1.6rem"
      />
      <Text
        color="gray.100"
        my="0.4rem"
        maxH="6rem"
        overflow="hidden"
        lineHeight="2.2rem"
        fontSize={["1.4rem", null, null, "1.8rem"]}
      >
        {subDescription}
      </Text>
      <S.Wrapper>
        <ButtonGroup spacing={["20px", "25px", "30px", "40px"]}>
          <Button
            colorScheme="green"
            borderRadius="0.7rem"
            textAlign="center"
            fontSize={["1.2rem", null, null, "1.4rem"]}
            _hover={{ border: "0.1rem solid white" }}
          >
            Ver projeto
          </Button>
          <Button
            bg="blackAlpha.600"
            borderRadius="0.7rem"
            color="gray.100"
            _hover={{ border: "0.1rem solid white" }}
            fontSize={["1.2rem", null, null, "1.4rem"]}
            leftIcon={<FaGithub />}
          >
            Ver Código
          </Button>
        </ButtonGroup>
      </S.Wrapper>
    </Box>
  );
};

export default CardBox;
