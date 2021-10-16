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
      h={["46rem", null, "51rem"]}
      bg="blackAlpha.400"
      borderRadius="1rem"
      p="1rem"
      mx="1rem"
      position="relative"
    >
      <Image src={url} borderRadius="1rem" h="22rem" w="100%" />
      <Headings
        msg={title}
        color={"orange"}
        margin="1.6rem auto"
        padding="1rem"
      />
      <Text
        color="gray.100"
        my="1rem"
        maxH={["7rem", null, "9rem"]}
        overflow="hidden"
        fontSize={["1.6rem", null, null, "2.1rem"]}
      >
        {subDescription}
      </Text>
      <S.Wrapper>
        <ButtonGroup spacing={["20px", "25px", "30px", "40px"]}>
          <Button
            colorScheme="green"
            borderRadius="0.7rem"
            transition="border .5s ease-in-out"
            textAlign="center"
            fontSize={["1.2rem", "1.4rem", "1.6rem"]}
            fontStyle="italic"
            p={["1rem ", "1.5rem 1rem", "1.5rem", "2rem"]}
            _hover={{ border: "0.1rem solid white" }}
          >
            Ver projeto
          </Button>
          <Button
            bg="blackAlpha.600"
            borderRadius="0.7rem"
            transition="border .4s ease-in-out"
            color="gray.100"
            _hover={{ border: "0.1rem solid white" }}
            fontSize={["1.2rem", "1.4rem", "1.6rem"]}
            fontStyle="italic"
            p={["1rem ", "1.5rem 1rem", "1.5rem", "2rem"]}
            leftIcon={
              <S.Icon>
                <FaGithub />
              </S.Icon>
            }
          >
            Ver Código
          </Button>
        </ButtonGroup>
      </S.Wrapper>
    </Box>
  );
};

export default CardBox;
