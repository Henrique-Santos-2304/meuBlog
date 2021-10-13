/* eslint-disable @next/next/no-img-element */
import { Flex, useMediaQuery } from "@chakra-ui/react";
import { Img } from "@chakra-ui/react";
import IconsContact from "components/IconsContact";

const ImageUserMain = () => {
  const [isGreatherThan768] = useMediaQuery("(max-width: 768px)");
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      mt={["1rem", null, "-5rem"]}
    >
      <Img
        boxShadow="0 0 20px red, 0 0 20px white"
        boxSize={["20rem", null, "22rem", "24rem"]}
        borderRadius="full"
        src="https://res.cloudinary.com/defnibbpl/image/upload/v1633360607/large_henrique_techs_89a8aae1bc.jpg"
      />
      {isGreatherThan768 && <IconsContact />}
    </Flex>
  );
};

export default ImageUserMain;
