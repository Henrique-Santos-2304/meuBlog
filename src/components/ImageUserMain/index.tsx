/* eslint-disable @next/next/no-img-element */
import { Flex, useMediaQuery } from "@chakra-ui/react";
import { Img } from "@chakra-ui/react";

import { queryHome_home_userImage } from "graphql/typesFinal/queryHome";

import IconsContact from "components/IconsContact";

type props = {
  data: queryHome_home_userImage;
};

const ImageUserMain = ({ data }: props) => {
  const [isGreatherThan767] = useMediaQuery("(max-width: 767px)");
  return (
    <Flex
      as="figure"
      align="center"
      justify="center"
      direction="column"
      mt={["-2rem", null, "-5rem"]}
      aria-label="Foto de um Programador/ Desenvolvedor  "
    >
      <Img
        boxShadow="0 0 20px red, 0 0 20px white"
        mb="3rem"
        boxSize={["16rem", null, "18rem"]}
        borderRadius="full"
        src={data.imageUser.url}
        alt={data.alt}
        aria-label={data.ariaLabel}
      />
      {isGreatherThan767 && <IconsContact />}
    </Flex>
  );
};

export default ImageUserMain;
