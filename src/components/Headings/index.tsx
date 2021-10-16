import { Heading } from "@chakra-ui/react";

type headeingProps = {
  msg?: string;
  color?: string;
  margins?: string;
  padding?: string;
  fontSize?: string;
};
const Headings = ({
  msg,
  color,
  margins,
  padding,
  fontSize,
}: headeingProps) => (
  <Heading
    w="max-content"
    color={color ? color : "orange"}
    position="relative"
    p={padding ? padding : "1rem"}
    m={margins ? margins : "1rem"}
    fontSize={fontSize ? fontSize : "1.6rem"}
    _before={{
      content: "''",
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "70%",
      height: "0.4rem",
      borderRadius: "2rem",
      background: "orange",
    }}
  >
    {msg}
  </Heading>
);

export default Headings;
