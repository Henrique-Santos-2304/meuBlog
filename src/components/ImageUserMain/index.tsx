/* eslint-disable @next/next/no-img-element */
import { Flex, useMediaQuery } from "@chakra-ui/react";
import { Img } from "@chakra-ui/react";
import IconsContact from "components/IconsContact";

const ImageUserMain = () => {
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
        src="https://res.cloudinary.com/defnibbpl/image/upload/v1633360607/large_henrique_techs_89a8aae1bc.jpg"
        alt="Foto de um desenvolvedor Front End"
      />
      {isGreatherThan767 && <IconsContact />}
    </Flex>
  );
};

export default ImageUserMain;
