import * as S from "./styles";
import { Box, Image, Text } from "@chakra-ui/react";

type cardsFrameworks = {
  url: string;
  title: string;
};
const CardSkilss = ({ url, title }: cardsFrameworks) => (
  <Box
    w={["16rem", "16rem", null, "18rem"]}
    h="20rem"
    m="4rem auto"
    p="1rem"
    borderRadius="1rem"
    bg="whiteAlpha.200"
  >
    <S.Identity id="title">
      <Image
        src={url}
        alt={title}
        w="100%"
        h={["12rem"]}
        m="0 auto"
        borderRadius="2rem"
        p="1rem"
      />
    </S.Identity>
    <Text
      textAlign="center"
      mt="1.5rem"
      color="gray.100"
      fontWeight="500"
      fontSize={["1.4rem", "1.6rem", "1.8rem"]}
    >
      {title}
    </Text>
  </Box>
);

export default CardSkilss;
