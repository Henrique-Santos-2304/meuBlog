import { Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import IconsContact from "components/IconsContact";
import theme from "styles/theme";
import * as S from "./styles";

const BoxMain = () => {
  const [isLargerThan648] = useMediaQuery("(min-width: 767px)");
  return (
    <Flex
      align="center"
      direction="column"
      mt={["1rem", null, "-5rem"]}
      mb="3rem"
    >
      <S.Span></S.Span>
      <Heading
        as="h1"
        fontSize={["3.2rem", null, "3.4rem", "4.3rem"]}
        letterSpacing="0.1rem"
        isTruncated
        p="0.7rem"
        color="red.600"
        fontFamily={theme.font.family.GrechenFuemen}
      >
        Henrique dos Santos
      </Heading>
      <Heading
        as="h4"
        fontSize={["1.7rem", null, "1.9rem"]}
        isTruncated
        m="0.5rem 1rem"
        color="gray.100"
        fontStyle="italic"
        fontFamily={theme.font.family.Poppins}
      >
        Desenvolvedor Web front End
      </Heading>
      {isLargerThan648 && <IconsContact />}
    </Flex>
  );
};

export default BoxMain;