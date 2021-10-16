import { Heading } from "@chakra-ui/react";

type headeingProps = {
  msg: string;
  color: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
};
const Headings = ({ msg, color, margin, padding, fontSize }: headeingProps) => (
  <Heading
    w="max-content"
    color={color}
    position="relative"
    p={padding}
    m={margin}
    fontSize={fontSize}
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
