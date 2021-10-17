import { Flex, Image, Text } from "@chakra-ui/react";

type cardsFrameworks = {
  url: string;
  title: string;
};
const CardSkilss = ({ url, title }: cardsFrameworks) => (
  <Flex
    h="11.5rem"
    m="4rem 1rem"
    direction="column"
    align="center"
    justify="center"
    borderRadius="1rem"
    bg="whiteAlpha.200"
    transition="transform .4s linear"
    _hover={{ transform: "translate(-7%, -7%)" }}
    isCentered
    cursor="pointer"
  >
    <Image
      src={url}
      alt={title}
      w="80%"
      h="7rem"
      m="0 auto"
      borderRadius="2rem"
      p="1rem"
    />
    <Text
      textAlign="center"
      mt="0.2rem"
      p="0 0.4rem"
      color="gray.100"
      fontWeight="500"
      lineHeight="1.6rem"
      fontSize={["1.1rem", "1.2rem", "1.4rem"]}
    >
      {title}
    </Text>
  </Flex>
);

export default CardSkilss;
