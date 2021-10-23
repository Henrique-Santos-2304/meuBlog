import * as S from "./styles";
import { Box, Image, Flex, useDisclosure } from "@chakra-ui/react";

import { ModalCardBox } from "../ModalCardBox";
import Headings from "components/globalComponents/Headings";
import Buttons from "components/PageProjects/Buttons";
import { imageCardProps } from "graphql/typesFinal/queryProjects";

const CardBox = ({
  url,
  title,
  subDescription,
  alt,
  buttons,
}: imageCardProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      h={["35rem", "40rem", "44rem", "46rem"]}
      bg="blackAlpha.700"
      p={["3rem", "7rem"]}
      mx={["0.5rem", "1rem"]}
      position="relative"
      borderRadius="3.5rem"
      aria-label="cardsSlides"
    >
      <Flex
        position="absolute"
        top="-1.2rem"
        left="50%"
        transform="translate(-50%)"
        borderRadius="4rem"
      >
        <Headings msg={title} color="gray.100" fontSize="2rem" />
      </Flex>
      <Image
        src={url}
        borderRadius="3rem"
        boxShadow="0 0 2rem white, 0 0 1rem orange"
        w={["90%", "100%"]}
        h={["60%", "100%"]}
        mx="auto"
        mt={["4rem", "0"]}
        alt={alt}
      />
      <S.Wrapper>
        <Buttons buttons={buttons} onOpen={onOpen} />
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
