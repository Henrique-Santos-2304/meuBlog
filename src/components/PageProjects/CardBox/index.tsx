import * as S from "./styles";
import { Box, Image, Flex, useDisclosure } from "@chakra-ui/react";

import { ModalCardBox } from "../ModalCardBox";
import Headings from "components/globalComponents/Headings";
import Buttons from "components/PageProjects/Buttons.ts";
import { imageProps } from "./SlidesTypes";

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
