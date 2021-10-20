import * as S from "./styles";
import { queryHome_home_boxMain } from "graphql/typesFinal/queryHome";

import { Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";

import theme from "styles/theme";
import IconsContact from "components/IconsContact";

type props = {
  data: queryHome_home_boxMain;
};
const BoxMain = ({ data }: props) => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  return (
    <Flex
      as="section"
      align="center"
      direction="column"
      mt="-5rem"
      mb="3rem"
      aria-label="Descrições de um Desenvolvedor FrontEnd"
    >
      <S.Span></S.Span>
      <Heading
        as="h1"
        fontSize={["2.8rem", null, "3.2rem"]}
        isTruncated
        color="yellow.400"
        fontFamily={theme.font.family.GrechenFuemen}
      >
        {data.name}
      </Heading>
      <Heading
        as="h4"
        fontSize={["1.4rem", null, "1.7rem"]}
        isTruncated
        m="0.5rem 1rem"
        color="gray.100"
        fontStyle="italic"
        fontFamily={theme.font.family.Poppins}
      >
        {data.profission}
      </Heading>
      <Text
        color="gray.100"
        fontStyle="italic"
        fontSize={["1.2rem", null, "1.4rem"]}
        mb="2rem"
        fontFamily={theme.font.family.Poppins}
      >
        {data.platform}
      </Text>
      {isLargerThan768 && <IconsContact />}
    </Flex>
  );
};

export default BoxMain;
