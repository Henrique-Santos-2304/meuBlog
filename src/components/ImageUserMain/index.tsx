/* eslint-disable @next/next/no-img-element */
import { Flex } from "@chakra-ui/react";
import { Img } from "@chakra-ui/react";

const ImageUserMain = () => (
  <Flex width="100%" align="center" justify="center">
    <Img
      boxShadow="0 0 20px red, 0 0 20px white"
      boxSize="20rem"
      borderRadius="full"
      src="https://res.cloudinary.com/defnibbpl/image/upload/v1633360607/large_henrique_techs_89a8aae1bc.jpg"
    />
  </Flex>
);

export default ImageUserMain;
