import * as S from "./styles";
import { Box } from "@chakra-ui/react";

const Logo = () => (
  <S.Wrapper aria-label="Logo de Web Dev">
    <Box padding="4" maxW="3xl">
      <S.PreText aria-label="logo dev">
        Web<span>Dev</span>
      </S.PreText>
    </Box>
  </S.Wrapper>
);

export default Logo;
