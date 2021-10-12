import { Flex, Heading } from "@chakra-ui/react";
import theme from "styles/theme";

const BoxMain = () => (
  <>
    <Flex align="center" direction="column" mt="-14rem" mb="3rem">
      <Heading
        as="h1"
        size="4xl"
        isTruncated
        p="0.7rem"
        color="red.600"
        fontStyle="italic"
        fontFamily={theme.font.family.GrechenFuemen}
      >
        Henrique dos Santos
      </Heading>
      <Heading
        as="h4"
        size="xl"
        isTruncated
        m="0.5rem 1rem"
        color="gray.100"
        fontStyle="italic"
        fontFamily={theme.font.family.Poppins}
      >
        Desenvolvedor Web front End
      </Heading>
    </Flex>
  </>
);

export default BoxMain;
